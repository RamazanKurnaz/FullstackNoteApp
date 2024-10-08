
import React from "react";

const RedDot = ({ size = "14" }) => {
    return (
        <svg
            id="Red_Circle_24"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />
            <g transform="matrix(0.42 0 0 0.42 12 12)">
                <g>
                    <g transform="matrix(1 0 0 1 0 0)">
                        <linearGradient
                            id="SVGID_0mN9JBqXHzFxUk_CVfC1Fa_4"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(1 0 0 1 792 -24)"
                            x1="-792"
                            y1="6"
                            x2="-792"
                            y2="42"
                        >
                            <stop offset="0%" style={{ stopColor: "rgb(255,130,130)", stopOpacity: 0.7 }} />
                            <stop offset="100%" style={{ stopColor: "rgb(214,19,19)", stopOpacity: 0.7 }} />
                        </linearGradient>
                        <circle
                            style={{
                                stroke: "none",
                                strokeWidth: 1,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeDashoffset: 0,
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 4,
                                fill: "url(#SVGID_0mN9JBqXHzFxUk_CVfC1Fa_4)",
                                fillRule: "nonzero",
                                opacity: 0.7,
                            }}
                            cx="0"
                            cy="0"
                            r="18"
                        />
                    </g>
                    <g transform="matrix(1 0 0 1 0 0)">
                        <radialGradient
                            id="SVGID_0mN9JBqXHzFxUk_CVfC1Fb_5"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(1 0 0 1 792 -24)"
                            cx="-792"
                            cy="24"
                            r="18"
                            fx="-792"
                            fy="24"
                        >
                            <stop offset="0%" style={{ stopColor: "rgb(255,117,117)", stopOpacity: 0 }} />
                            <stop offset="40.6%" style={{ stopColor: "rgb(254,116,116)", stopOpacity: 0.011 }} />
                            <stop offset="55.3%" style={{ stopColor: "rgb(250,111,111)", stopOpacity: 0.052 }} />
                            <stop offset="65.7%" style={{ stopColor: "rgb(244,103,103)", stopOpacity: 0.123 }} />
                            <stop offset="74.1%" style={{ stopColor: "rgb(235,92,92)", stopOpacity: 0.225 }} />
                            <stop offset="81.3%" style={{ stopColor: "rgb(223,77,77)", stopOpacity: 0.358 }} />
                            <stop offset="87.7%" style={{ stopColor: "rgb(209,59,59)", stopOpacity: 0.522 }} />
                            <stop offset="93.5%" style={{ stopColor: "rgb(191,37,37)", stopOpacity: 0.717 }} />
                            <stop offset="98.7%" style={{ stopColor: "rgb(172,12,12)", stopOpacity: 0.936 }} />
                            <stop offset="100%" style={{ stopColor: "rgb(166,5,5)", stopOpacity: 1 }} />
                        </radialGradient>
                        <circle
                            style={{
                                stroke: "none",
                                strokeWidth: 1,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeDashoffset: 0,
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 4,
                                fill: "url(#SVGID_0mN9JBqXHzFxUk_CVfC1Fb_5)",
                                fillRule: "nonzero",
                                opacity: 0.5,
                            }}
                            cx="0"
                            cy="0"
                            r="18"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default RedDot;

