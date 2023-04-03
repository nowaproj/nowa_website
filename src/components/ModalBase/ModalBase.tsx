import React, {
  useState,
  FC,
  useRef,
  PropsWithChildren,
  useEffect,
  memo,
} from "react";
import { YKModalAnimation } from "./ModalAnimations";
import clsx from "clsx";
import style from "./ModalBase.module.scss";
import { createPortal } from "react-dom";
// simple dimple pop it squish
type props = {
  value: boolean;
  callback: (e: boolean) => void;
  innerModalAnimation?: string;
  outModalAnimation?: string;
  node?: Element | null | undefined;
  timingFunction?: number;
  alignment?: "center" | "left" | "right";
  disableScroll?: boolean;
  innerModalClassName?: string;
  outerModalClassName?: string;
};
/**
 create a modal
 modal animation can be gotten from YKModalAnimation
 if you want to create a dropdown menu or a relative one
 you have to provide a node for the modal to attack itself to
 make sure to give the node a positon of relative as it relies on it
 @see YKModalAnimation for what animations I've predefined
 you can also create your own animations, go wild!
 * 
 */
export const ModalBase: FC<PropsWithChildren<props>> = memo<
  PropsWithChildren<props>
>(
  ({
    callback,
    value,
    children,
    innerModalAnimation = YKModalAnimation.innerModalAnimations.blurBlack,
    outModalAnimation = YKModalAnimation.outerModalAnimations.zoomFade,
    node,
    timingFunction = 200,
    alignment = "left",
    disableScroll = false,
    innerModalClassName = "",
    outerModalClassName = "",
  }) => {
    const originalOverFlow = useRef<string>();
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const [trackedLocalValue, setTrackedLocalValue] = useState(value);

    useEffect(() => {
      let timeout: NodeJS.Timeout;
      let timeout2: NodeJS.Timeout;
      const onClose = () => {
        if (ref1.current) ref1.current.setAttribute("data-in", "false");
        if (ref2.current) ref2.current.setAttribute("data-in", "false");
        timeout2 = setTimeout(() => {
          setTrackedLocalValue(false);
          callback(false);
        }, timingFunction);
      };
      if (value) {
        setTrackedLocalValue(value);
      } else {
        if (ref1.current?.getAttribute("data-in") !== "false") {
          onClose();
        }
      }
      return () => {
        if (timeout) clearTimeout(timeout);
        if (timeout2) clearTimeout(timeout2);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // for disabling scroll
    useEffect(() => {
      const html = window.document.getElementsByTagName("html")[0];
      if (value) {
        originalOverFlow.current = html.style.overflow;
        if (disableScroll) html.style.overflow = "hidden";
      } else {
        html.style.overflow = originalOverFlow.current ?? "initial";
      }
      return () => {
        window.document.getElementsByTagName("html")[0].style.overflow =
          originalOverFlow.current ?? "initial";
      };
    }, [value, disableScroll]);

    React.useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (
          // @ts-ignore
          !ref2.current.contains(event.target) &&
          trackedLocalValue
        )
          callback(false);
      };
      if (trackedLocalValue && !ref1.current)
        window.addEventListener("click", handleClick);
      return () => {
        window.removeEventListener("click", handleClick);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref2, ref1, trackedLocalValue]);

    if (node)
      return trackedLocalValue && typeof document !== "undefined"
        ? createPortal(
            <div
              className={clsx(
                style["in-modal-2"],
                outModalAnimation,
                outerModalClassName
              )}
              ref={ref2}
              style={{
                top: "0px",

                right:
                  alignment === "right" || alignment === "center"
                    ? "0px"
                    : "initial",
                left:
                  alignment === "left" || alignment === "center"
                    ? "0px"
                    : "initial",
              }}
            >
              {children}
            </div>,
            node
          )
        : null;
    return (
      <>
        {trackedLocalValue && typeof document !== "undefined"
          ? createPortal(
              <div
                className={clsx(
                  style["out-modal"],
                  innerModalAnimation,
                  innerModalClassName
                )}
                ref={ref1}
                onClick={(e) => {
                  if (e.target === ref1.current) callback(false);
                }}
              >
                <div
                  className={clsx(
                    style["in-modal"],
                    outModalAnimation,
                    outerModalClassName
                  )}
                  ref={ref2}
                >
                  {children}
                </div>
              </div>,
              document.body
            )
          : null}
      </>
    );
  }
);
ModalBase.displayName = "Modal Base";
