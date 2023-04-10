import { Button, NavbarButtonTransparent } from '@/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './Navbar.module.scss';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { IoIosArrowDown, IoMdMenu } from 'react-icons/io';
import { ModalBase } from '../ModalBase';
import { YKModalAnimation } from '../ModalBase/ModalAnimations';

export const Navbar = () => {
    const { asPath } = useRouter();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <div
            className={style['header-wrapper']}
            data-other={asPath !== '/' && asPath !== '/about'}
        >
            <header className={style['header']}>
                <button
                    className={style['menu']}
                    aria-label="open mobile navigation menu"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <IoMdMenu />
                </button>
                <Link href={'/'}>
                    <Image
                        src="/cassets/logo.svg"
                        alt="logo"
                        width={108}
                        height={22.67}
                        priority
                    />
                </Link>
                <div className={style['links']}>
                    <div className={style['dropdown']}>
                        <NavbarButtonTransparent
                            text="Learn"
                            arrow
                            aria-label="hover to show learn links"
                        />
                        <ul className={style['dropdown-list']}>
                            <li>
                                <a
                                    href="https://docs.nowa.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        style['documentation-card'],
                                        style['card-blue']
                                    )}
                                >
                                    <p>documentation</p>
                                    <img
                                        src="assets/docu-dropdown.svg"
                                        alt=""
                                        className={
                                            style['documentation-card-img']
                                        }
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@nowadev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        style['documentation-card'],
                                        style['card-yellow']
                                    )}
                                >
                                    <p>tutorial</p>
                                    <img
                                        src="assets/tut-dropdown.svg"
                                        alt=""
                                        className={
                                            style['documentation-card-img']
                                        }
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={style['dropdown']}>
                        <NavbarButtonTransparent
                            text="Community"
                            arrow
                            aria-label="hover to show learn links"
                        />

                        <ul className={style['dropdown-list']}>
                            <li>
                                <a
                                    href="https://discord.gg/ByKfn3H7gX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        style['documentation-card'],
                                        style['card-linear']
                                    )}
                                >
                                    <Image
                                        src="/cassets/discord-white.svg"
                                        width={30}
                                        height={30}
                                        className={style['discord-img']}
                                        alt="discord icon"
                                    />
                                    <p>
                                        JOIN OUR
                                        <br /> COMMUNITY!
                                    </p>
                                    <img
                                        src="assets/disc-dropdown.svg"
                                        alt=""
                                        className={
                                            style['documentation-card-img']
                                        }
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <Link href="/about">
                        <NavbarButtonTransparent text="About" />
                    </Link>
                    <a
                        href="https://app.nowa.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button varient="ghost" text="LOG IN" />
                    </a>
                    <a
                        href="https://app.nowa.dev/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button text="GET STARTED" arrow />
                    </a>
                </div>
            </header>
            <ModalBase
                callback={setIsMenuOpen}
                value={isMenuOpen}
                outModalAnimation={
                    YKModalAnimation.outerModalAnimations.modalLeft
                }
                outerModalClassName={style['drawer']}
            >
                <Link href={'/'}>
                    <Image
                        src="/cassets/logo.svg"
                        alt="logo"
                        width={108}
                        height={22.67}
                        priority
                    />
                </Link>
                <ul className={style['dropdown-mobile']}>
                    <li className={style['dropdown-mobile']}>
                        <button aria-label="expand sub menu">
                            Learn <IoIosArrowDown />
                        </button>
                        <ul className={style['dropdown-list-mobile']}>
                            <li>
                                <a
                                    href="https://docs.nowa.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@nowadev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    tutorial
                                </a>
                            </li>
                        </ul>
                    </li>
                    <ul className={style['dropdown-mobile']}>
                        <button aria-label="expand sub menu">
                            Community <IoIosArrowDown />
                        </button>
                        <ul className={style['dropdown-list-mobile']}>
                            <li>
                                <a
                                    href="https://discord.gg/ByKfn3H7gX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p>Join our community!</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <Link href="/about">About</Link>
                    <a
                        href="https://app.nowa.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LOG IN
                    </a>
                    <a
                        href="https://app.nowa.dev/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GET STARTED
                    </a>
                </ul>
            </ModalBase>
        </div>
    );
};
