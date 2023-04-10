import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import style from './StunningAppsSection.module.scss';
import clsx from 'clsx';

export const StunningAppsSection = () => {
    return (
        <>
            <div className={style['stunning-section']}>
                <div className={style['stunning']}>
                    <strong>
                        Create stunning designs like an{' '}
                        <span id="stunning-1">
                            artist!
                            <div
                                className={clsx(
                                    style['scribble-1'],
                                    style['scribble']
                                )}
                            >
                                <Image
                                    src="/cassets/scribble-1.png"
                                    fill
                                    alt=""
                                />
                            </div>
                        </span>
                    </strong>
                    <p>
                        Be creative and create any design you can imagine as
                        smooth as <strong>drawing on a paper</strong>. No
                        limitation or struggle! And the best part is:{' '}
                        <strong>
                            no need to write Flutter UI code anymore!
                        </strong>
                    </p>
                    <div className={style['stunning-icon']}>
                        <Image src="/cassets/paint.svg" alt="" fill />
                    </div>
                    <div className={style['stunning-image-1']}>
                        <img
                            src="/cassets/arrow-3.png"
                            alt=""
                            className={style['arrow']}
                        />
                        <motion.img
                            src="/assets/stunning-1-3.png"
                            alt=""
                            className={style['app-2']}
                            whileInView={{
                                bottom: [-0, -25],
                                rotate: [0, 11.7],
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                        />
                        <motion.img
                            src="/assets/stunning-1-2.png"
                            alt=""
                            className={style['app-1']}
                            whileInView={{
                                bottom: [-0, -30],
                                rotate: [0, -10],
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                        />

                        <video
                            src="/assets/stunning-1-1.webm"
                            className={style['app-3']}
                            autoPlay
                            muted
                        />
                    </div>
                </div>
                <div className={style['stunning']}>
                    <strong>
                        Same
                        <span>
                            {' '}
                            power{' '}
                            <div
                                className={clsx(
                                    style['scribble-2'],
                                    style['scribble']
                                )}
                            >
                                <Image
                                    src="/cassets/scribble-2.png"
                                    fill
                                    alt=""
                                />
                            </div>
                            <div
                                className={clsx(
                                    style['scribble-3'],
                                    style['scribble']
                                )}
                            >
                                <Image
                                    src="/cassets/arrow-group.svg"
                                    fill
                                    alt=""
                                />
                            </div>
                        </span>
                        of code with no code!
                    </strong>
                    <p>
                        Be creative and create any design you can imagine as
                        smooth as <strong>drawing on a paper</strong>. No
                        limitation or struggle! And the best part is:{' '}
                        <strong>
                            no need to write Flutter UI code anymore!
                        </strong>
                    </p>
                    <div className={style['stunning-image-1']}>
                        <video
                            src="/assets/stunning-design.webm"
                            className={style['app-4']}
                            autoPlay
                            muted
                            loop
                        />
                    </div>
                </div>
                <div className={style['stunning']}>
                    <strong>
                        User
                        <span>
                            {' '}
                            your favorite{' '}
                            <div
                                className={clsx(
                                    style['scribble-1'],
                                    style['scribble']
                                )}
                            >
                                <Image
                                    src="/cassets/scribble-3.png"
                                    fill
                                    alt=""
                                />
                            </div>
                        </span>
                        backend.
                    </strong>
                    <p>
                        Firebase, Supabase, Airtable, Google sheets or your own
                        API. Connect your app with the backend of your choice
                        <strong> within couple of clicks!</strong> Not a single
                        line of code is needed.
                    </p>
                    <div className={style['stunning-icon']}>
                        <Image src="/cassets/db.png" alt="" fill />
                    </div>
                    <div className={style['stunning-image-1']}>
                        <img
                            src="/assets/stunning-3.png"
                            alt=""
                            className={style['app-4']}
                        />
                    </div>
                </div>
                <div className={style['stunning']}>
                    <strong
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <span>
                            Yes,{' '}
                            <div
                                className={clsx(
                                    style['scribble-4'],
                                    style['scribble']
                                )}
                            >
                                <Image
                                    src="/cassets/scribble-4.png"
                                    fill
                                    alt=""
                                />
                            </div>
                        </span>
                        you can still code.
                    </strong>
                    <p
                        style={{
                            textAlign: 'center',
                            maxWidth: 863,
                            margin: 'auto',
                        }}
                    >
                        Use Nowa Circuit, or <strong>write Flutter code</strong>{' '}
                        for the parts you like to code. You free to choose!
                        Download the <strong>full source-code</strong> for your
                        app anytime, or use Nowa and your favorite IDE for the
                        same project at the same time with{' '}
                        <strong>Nowa Hybrid mode on desktop.</strong>
                    </p>
                    <div className={style['stunning-image-1']}>
                        <img
                            src="/cassets/arrow-white.svg"
                            alt=""
                            className={style['arrow-white']}
                        />
                        <img
                            src="/cassets/arrow-orange.svg"
                            alt=""
                            className={style['arrow-orange']}
                        />
                        <img
                            src="/assets/stunning-4.png"
                            alt=""
                            className={style['app-5']}
                        />
                        <img
                            src="/assets/stunning-4-1.png"
                            alt=""
                            className={style['app-6']}
                        />
                    </div>
                </div>
            </div>
            <div className={style['stunning-section-footer']}>
                <Image src="/cassets/eyes.png" alt="" width={50} height={50} />
                <strong>And so much more...</strong>
            </div>
        </>
    );
};
