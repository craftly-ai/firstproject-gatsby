import React from "react"
import Nav from "./Nav"
import Idea from "./Idea"
import { Link } from "gatsby"

const IdeasBox = props => {
  const {
    linkall,
    linkfavorite,
    linkcopyall,
    headingline1,
    headingline2,
    idealist,
    buttonkeepcrafting,
  } = props

  return (
    <>
      <Nav
        linkall={linkall}
        linkfavorite={linkfavorite}
        linkcopyall={linkcopyall}
      />
      <div className="box-row favorite-box block">
        <div className="border-box">
          <h4>{headingline1}</h4>
          <p>{headingline2}</p>
        </div>
        <ul>
          <li>
            <Link to="learn.html">
              <div className="icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="38.31px"
                  height="29.11px"
                  viewBox="0 0 38.31 29.11"
                  enableBackground="new 0 0 38.31 29.11"
                  xmlSpace="preserve"
                >
                  <path
                    d="M34.15,0H4.16C1.86,0,0,1.9,0,4.22v18.24c0,2.33,1.86,4.22,4.16,4.22h26.39c0.31,0,0.56-0.25,0.56-0.57
                                                      c0-0.31-0.25-0.57-0.56-0.57H4.16c-1.68,0-3.04-1.38-3.04-3.08V4.22c0-1.7,1.36-3.08,3.04-3.08h29.99c1.68,0,3.04,1.38,3.04,3.08
                                                      v18.24c0,1.7-1.36,3.08-3.04,3.08h-1.2c-0.31,0-0.56,0.26-0.56,0.57c0,0.32,0.25,0.57,0.56,0.57h1.2c2.3,0,4.16-1.89,4.16-4.22V4.22
                                                      C38.31,1.9,36.45,0,34.15,0z"
                  />
                  <path
                    d="M30.55,27.98H7.76c-0.31,0-0.56,0.25-0.56,0.57c0,0.31,0.25,0.56,0.56,0.56h22.79c0.31,0,0.56-0.25,0.56-0.56
                                                      C31.11,28.23,30.86,27.98,30.55,27.98z"
                  />
                  <path
                    d="M15.22,8.07c0.19-0.12,0.42-0.13,0.62-0.03l1.26,0.64c0.28,0.14,0.62,0.03,0.76-0.25C18,8.15,17.88,7.8,17.61,7.66
                                                      l-1.27-0.64c-0.55-0.27-1.19-0.25-1.71,0.08C14.11,7.43,13.8,8,13.8,8.62v9.44c0,0.63,0.31,1.19,0.83,1.52
                                                      c0.28,0.18,0.6,0.27,0.93,0.27c0.26,0,0.53-0.06,0.78-0.19l9.32-4.72c0.6-0.3,0.97-0.92,0.97-1.6c0-0.68-0.37-1.29-0.97-1.59
                                                      l-5.65-2.87c-0.28-0.14-0.62-0.03-0.76,0.26c-0.14,0.28-0.02,0.62,0.25,0.76l5.66,2.86c0.22,0.12,0.35,0.33,0.35,0.58
                                                      s-0.13,0.47-0.35,0.58l-9.32,4.72c-0.2,0.11-0.43,0.09-0.62-0.03c-0.19-0.12-0.3-0.32-0.3-0.55V8.62
                                                      C14.92,8.39,15.03,8.19,15.22,8.07z"
                  />
                </svg>
              </div>
              <h6>Watch Tutorials</h6>
            </Link>
          </li>
          <li>
            <Link>
              <div className="icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="33.716px"
                  height="33.71px"
                  viewBox="0 0 33.716 33.71"
                  enableBackground="new 0 0 33.716 33.71"
                  xmlSpace="preserve"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.886,6.38c0.27,0,0.49,0.23,0.49,0.5s-0.22,0.49-0.49,0.49
                                                  c-0.28,0-0.5-0.22-0.5-0.49S14.606,6.38,14.886,6.38z M14.886,8.36c0.81,0,1.48-0.66,1.48-1.48c0-0.82-0.67-1.48-1.48-1.48
                                                  c-0.82,0-1.48,0.66-1.48,1.48C13.406,7.7,14.066,8.36,14.886,8.36z M16.856,23.9c-0.92,0-1.67-0.75-1.67-1.67
                                                  c0-0.93,0.75-1.68,1.67-1.68s1.67,0.75,1.67,1.68C18.526,23.15,17.776,23.9,16.856,23.9z M16.856,19.57c-1.46,0-2.66,1.19-2.66,2.66
                                                  c0,1.46,1.2,2.65,2.66,2.65c1.47,0,2.66-1.19,2.66-2.65C19.516,20.76,18.326,19.57,16.856,19.57z M18.836,6.38
                                                  c0.27,0,0.49,0.23,0.49,0.5s-0.22,0.49-0.49,0.49s-0.5-0.22-0.5-0.49S18.566,6.38,18.836,6.38z M18.836,8.36
                                                  c0.81,0,1.48-0.66,1.48-1.48c0-0.82-0.67-1.48-1.48-1.48c-0.82,0-1.48,0.66-1.48,1.48C17.356,7.7,18.016,8.36,18.836,8.36z
                                                   M12.316,4.94c0-0.28,0.22-0.5,0.49-0.5h8.1c0.27,0,0.5,0.22,0.5,0.5v3.88c0,0.27-0.23,0.49-0.5,0.49h-8.1
                                                  c-0.27,0-0.49-0.22-0.49-0.49V4.94z M12.806,10.3h8.1c0.82,0,1.48-0.66,1.48-1.48V4.94c0-0.82-0.66-1.48-1.48-1.48h-8.1
                                                  c-0.81,0-1.48,0.66-1.48,1.48v3.88C11.326,9.64,11.996,10.3,12.806,10.3z M32.166,8.63c0.31,1.36,0.59,4.03-1,6.6
                                                  c-0.52,0.83-1.17,1.55-1.94,2.16c-0.01-0.4-0.06-0.79-0.15-1.17c0.48-0.45,0.9-0.95,1.25-1.51c1.12-1.81,1.18-3.69,1.03-4.94
                                                  c-0.01-0.15-0.09-0.28-0.21-0.36s-0.27-0.1-0.41-0.06c-0.25,0.07-0.5,0.1-0.77,0.1c-0.5,0-1.02-0.13-1.47-0.38
                                                  c-0.24-0.13-0.33-0.43-0.2-0.67c0.13-0.24,0.43-0.33,0.67-0.2c0.63,0.35,1.37,0.35,1.92,0.02c0.76-0.47,1.06-1.52,0.7-2.44
                                                  c-0.1-0.25,0.03-0.54,0.28-0.64c0.26-0.1,0.54,0.03,0.64,0.28c0.37,0.96,0.27,2.02-0.27,2.83C32.166,8.36,32.136,8.5,32.166,8.63z
                                                   M26.266,21.27c0.23-1.29,0.49-3.44-0.11-6.04c-0.1-0.43-0.22-0.85-0.35-1.27c1.34-0.06,2.44,1.66,2.44,3.68
                                                  C28.246,19.43,27.376,20.97,26.266,21.27z M25.426,20.27h-4.37c-0.76-1.63-2.4-2.68-4.2-2.68c-1.79,0-3.44,1.05-4.2,2.68h-4.36
                                                  c-0.16-1.23-0.22-2.88,0.23-4.82c0.31-1.35,0.82-2.66,1.53-3.9c1.83,1.46,4.2,2.21,6.8,2.21c2.55,0,5.01-0.77,6.8-2.21
                                                  c0.71,1.24,1.23,2.55,1.54,3.9C25.646,17.39,25.576,19.04,25.426,20.27z M25.186,21.66l-0.01,0.05c-0.09,0.5-0.22,0.99-0.36,1.49
                                                  h-3.78c-0.37,0-0.71,0.21-0.86,0.55c-0.6,1.29-1.9,2.12-3.32,2.12s-2.72-0.83-3.31-2.12c-0.16-0.34-0.5-0.55-0.87-0.55h-3.78
                                                  c-0.14-0.5-0.27-1.01-0.37-1.54l-0.08-0.4h4.23c0.37,0,0.71-0.22,0.87-0.55c0.59-1.3,1.89-2.13,3.31-2.13s2.72,0.83,3.32,2.13
                                                  c0.15,0.33,0.49,0.55,0.86,0.55h4.23L25.186,21.66z M7.556,15.23c-0.59,2.6-0.33,4.75-0.11,6.04c-1.1-0.3-1.97-1.84-1.97-3.63
                                                  c0-2.01,1.1-3.74,2.44-3.68C7.776,14.38,7.656,14.8,7.556,15.23z M4.486,17.39c-0.77-0.61-1.42-1.33-1.94-2.16
                                                  c-1.59-2.57-1.31-5.24-1-6.6c0.03-0.13,0.01-0.27-0.07-0.38c-0.54-0.81-0.64-1.87-0.27-2.83c0.1-0.25,0.39-0.38,0.64-0.28
                                                  s0.38,0.39,0.28,0.64c-0.35,0.92-0.05,1.97,0.7,2.44c0.56,0.33,1.29,0.33,1.93-0.02c0.24-0.13,0.54-0.04,0.67,0.2
                                                  c0.12,0.23,0.03,0.54-0.2,0.67c-0.46,0.25-0.97,0.38-1.48,0.38c-0.26,0-0.52-0.03-0.77-0.1c-0.28-0.08-0.59,0.12-0.62,0.42
                                                  c-0.15,1.25-0.09,3.13,1.03,4.94c0.35,0.56,0.77,1.06,1.25,1.51C4.556,16.6,4.506,16.99,4.486,17.39z M33.426,5.07
                                                  c-0.29-0.76-1.15-1.14-1.91-0.85c-0.76,0.29-1.14,1.16-0.85,1.92c0.18,0.47,0.05,1.02-0.3,1.23c-0.25,0.16-0.6,0.14-0.93-0.04
                                                  c-0.71-0.38-1.62-0.11-2.01,0.6c-0.39,0.71-0.13,1.61,0.59,2.01c0.61,0.33,1.28,0.5,1.95,0.5c0.16,0,0.31-0.01,0.46-0.03
                                                  c0.05,1.07-0.12,2.45-0.94,3.78c-0.22,0.35-0.47,0.68-0.75,0.98c-0.13-0.27-0.27-0.53-0.43-0.77c-0.64-0.92-1.5-1.43-2.44-1.43
                                                  c-0.14,0-0.27,0.01-0.41,0.03c-0.29-0.73-0.64-1.44-1.05-2.13c1.11-1.15,1.7-2.54,1.7-3.99c0-1.87-0.98-3.61-2.76-4.92
                                                  C21.606,0.7,19.306,0,16.856,0c-1.63,0-3.23,0.32-4.63,0.92c-0.25,0.1-0.36,0.39-0.26,0.64c0.11,0.26,0.4,0.37,0.65,0.26
                                                  c1.28-0.54,2.75-0.83,4.24-0.83c4.56,0,8.27,2.64,8.27,5.89c0,3.9-4.45,5.89-8.27,5.89c-3.76,0-8.26-2.01-8.26-5.89
                                                  c0-1.46,0.76-2.87,2.15-3.96c0.21-0.17,0.25-0.48,0.08-0.69c-0.17-0.22-0.48-0.25-0.69-0.08c-1.63,1.28-2.53,2.96-2.53,4.73
                                                  c0,1.45,0.6,2.84,1.71,3.99c-0.41,0.69-0.76,1.4-1.05,2.13c-0.14-0.02-0.28-0.03-0.42-0.03c-0.93,0-1.8,0.51-2.44,1.43
                                                  c-0.16,0.24-0.3,0.5-0.42,0.77c-0.28-0.3-0.54-0.63-0.76-0.98c-0.82-1.33-0.98-2.71-0.93-3.78c0.15,0.02,0.3,0.03,0.45,0.03
                                                  c0.67,0,1.35-0.17,1.95-0.5c0.71-0.39,0.98-1.31,0.59-2.01c-0.39-0.72-1.29-0.99-2.01-0.59c-0.32,0.17-0.68,0.19-0.93,0.03
                                                  c-0.35-0.21-0.48-0.76-0.3-1.23c0.3-0.76-0.1-1.63-0.84-1.92c-0.76-0.29-1.63,0.09-1.92,0.85c-0.46,1.18-0.36,2.49,0.26,3.54
                                                  c-0.32,1.57-0.53,4.4,1.17,7.14c0.72,1.17,1.68,2.14,2.85,2.91c0.13,0.83,0.42,1.59,0.85,2.22c0.59,0.86,1.38,1.36,2.24,1.43
                                                  c0.77,3.66,3.43,7.71,5.14,9.64c0.99,1.12,2.47,1.76,4.06,1.76c1.59,0,3.07-0.64,4.06-1.76c0.96-1.08,1.82-2.22,2.54-3.38
                                                  c0.15-0.24,0.07-0.54-0.16-0.68c-0.23-0.15-0.53-0.08-0.68,0.15c-0.69,1.12-1.52,2.22-2.44,3.26c-0.79,0.89-2.03,1.42-3.32,1.42
                                                  s-2.53-0.53-3.32-1.42c-1.45-1.64-3.23-4.08-4.31-7.12h3.43c0.76,1.63,2.41,2.68,4.2,2.68c1.8,0,3.44-1.05,4.2-2.68h3.44
                                                  c-0.22,0.64-0.49,1.26-0.78,1.88c-0.12,0.25-0.02,0.54,0.23,0.66c0.24,0.12,0.54,0.02,0.66-0.23c0.65-1.35,1.14-2.74,1.46-4.18
                                                  c0.86-0.07,1.65-0.57,2.24-1.43c0.43-0.63,0.72-1.39,0.85-2.22c1.17-0.77,2.13-1.74,2.85-2.91c1.7-2.74,1.49-5.57,1.17-7.14
                                                  C33.796,7.56,33.886,6.25,33.426,5.07z"
                  />
                </svg>
              </div>
              <h6>Help! AI Is Being Weird</h6>
            </Link>
          </li>
          <li>
            <Link>
              <div className="icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="38.32px"
                  height="33.71px"
                  viewBox="0 0 38.32 33.71"
                  enableBackground="new 0 0 38.32 33.71"
                  xmlSpace="preserve"
                >
                  <path
                    d="M36.46,8.01h-4.84V1.9c0-1.04-0.83-1.9-1.86-1.9H1.86C0.84,0,0,0.86,0,1.9v22.57c0,0.5,0.3,0.95,0.75,1.14
                                                  c0.15,0.06,0.31,0.09,0.46,0.09c0.32,0,0.62-0.12,0.86-0.36l3.84-3.93H6.7v6.11c0,1.05,0.84,1.9,1.86,1.9h11.68
                                                  c0.31,0,0.56-0.26,0.56-0.58c0-0.31-0.25-0.57-0.56-0.57H8.56c-0.4,0-0.73-0.34-0.73-0.75v-6.11h21.93c1.03,0,1.86-0.85,1.86-1.9
                                                  v-4.08c0-0.32-0.25-0.58-0.56-0.58s-0.57,0.26-0.57,0.58v4.08c0,0.41-0.32,0.75-0.73,0.75H5.68c-0.15,0-0.3,0.06-0.4,0.17l-4.01,4.1
                                                  c-0.01,0.01-0.04,0.04-0.09,0.02c-0.05-0.03-0.05-0.07-0.05-0.08V1.9c0-0.41,0.33-0.75,0.73-0.75h27.9c0.41,0,0.73,0.34,0.73,0.75
                                                  v11c0,0.32,0.26,0.58,0.57,0.58s0.56-0.26,0.56-0.58V9.16h4.84c0.41,0,0.74,0.34,0.74,0.75v22.57c0,0.01,0,0.05-0.06,0.08
                                                  c-0.05,0.02-0.08-0.01-0.09-0.02l-4.01-4.1c-0.1-0.11-0.24-0.17-0.39-0.17h-9.94c-0.31,0-0.56,0.26-0.56,0.57
                                                  c0,0.32,0.25,0.58,0.56,0.58h9.7l3.85,3.93c0.23,0.24,0.53,0.36,0.85,0.36c0.15,0,0.31-0.03,0.46-0.09
                                                  c0.46-0.19,0.75-0.64,0.75-1.14V9.91C38.32,8.86,37.49,8.01,36.46,8.01z"
                  />
                  <path
                    d="M16.61,16.62c-0.26,0.13-0.53,0.26-0.8,0.39c-0.27-0.13-0.54-0.26-0.8-0.39c-1.31-0.69-2.48-1.55-3.47-2.56
                                                  c-0.22-0.22-0.57-0.22-0.79,0c-0.22,0.23-0.22,0.59,0,0.82c1.07,1.08,2.33,2.01,3.75,2.76c0.28,0.15,0.58,0.29,0.88,0.43
                                                  c0.14,0.06,0.28,0.09,0.43,0.09s0.29-0.03,0.43-0.09c0.3-0.14,0.6-0.28,0.88-0.43C21.64,15.26,24,11.28,24,8.57
                                                  c0-2.93-2.2-5.32-4.9-5.32c-1.23,0-2.39,0.49-3.29,1.37c-0.89-0.88-2.06-1.37-3.28-1.37c-2.71,0-4.91,2.39-4.91,5.32
                                                  c0,1.26,0.55,2.82,1.49,4.28c0.18,0.26,0.52,0.33,0.78,0.16c0.26-0.18,0.33-0.53,0.16-0.8c-0.83-1.28-1.3-2.6-1.3-3.64
                                                  c0-2.3,1.69-4.17,3.78-4.17c1.09,0,2.13,0.52,2.84,1.43c0.11,0.13,0.27,0.21,0.44,0.21s0.33-0.08,0.44-0.21
                                                  C16.97,4.92,18,4.4,19.1,4.4c2.08,0,3.77,1.87,3.77,4.17C22.87,10.41,21.17,14.22,16.61,16.62z"
                  />
                  <path
                    d="M33.34,23.86c0.31,0,0.56-0.26,0.56-0.57c0-0.32-0.25-0.58-0.56-0.58h-6.72c-0.31,0-0.56,0.26-0.56,0.58
                                                  c0,0.31,0.25,0.57,0.56,0.57H33.34z"
                  />
                  <path
                    d="M24.14,23.29c0-0.32-0.25-0.58-0.56-0.58H10.51c-0.31,0-0.57,0.26-0.57,0.58c0,0.31,0.26,0.57,0.57,0.57h13.07
                                                  C23.89,23.86,24.14,23.6,24.14,23.29z"
                  />
                  <path
                    d="M17.56,26.14h15.78c0.31,0,0.56-0.26,0.56-0.58c0-0.31-0.25-0.57-0.56-0.57H17.56c-0.31,0-0.56,0.26-0.56,0.57
                                                  C17,25.88,17.25,26.14,17.56,26.14z"
                  />
                  <path
                    d="M10.51,24.99c-0.31,0-0.57,0.26-0.57,0.57c0,0.32,0.26,0.58,0.57,0.58h3.99c0.31,0,0.56-0.26,0.56-0.58
                                                  c0-0.31-0.25-0.57-0.56-0.57H10.51z"
                  />
                  <path
                    d="M23.11,18.16h0.93c0.31,0,0.56-0.26,0.56-0.57c0-0.32-0.25-0.58-0.56-0.58h-0.93c-0.31,0-0.56,0.26-0.56,0.58
                                                  C22.55,17.9,22.8,18.16,23.11,18.16z"
                  />
                </svg>
              </div>
              <h6>Feedback</h6>
            </Link>
          </li>
          <li>
            <Link>
              <div className="icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="42.79px"
                  height="29.11px"
                  viewBox="0 0 42.79 29.11"
                  enableBackground="new 0 0 42.79 29.11"
                  xmlSpace="preserve"
                >
                  <path
                    d="M24.77,12.01c-0.35,0-0.63,0.28-0.63,0.63v9.52c0,0.3,0.23,0.56,0.53,0.62c0.04,0,0.1,0.01,1.12,0.01l2.32-0.01
                                                  c0.35,0,0.63-0.28,0.63-0.63c-0.01-0.34-0.29-0.62-0.63-0.62l-2.71,0.01v-8.9C25.4,12.29,25.12,12.01,24.77,12.01z"
                  />
                  <path
                    d="M12.06,22.79c0.35,0,0.63-0.28,0.63-0.62v-9.53c0-0.35-0.28-0.63-0.63-0.63c-0.34,0-0.62,0.28-0.62,0.63v3.97H6.1v-3.97
                                                  c0-0.35-0.28-0.63-0.63-0.63s-0.63,0.28-0.63,0.63v9.53c0,0.34,0.28,0.62,0.63,0.62s0.63-0.28,0.63-0.62v-4.3h5.34v4.3
                                                  C11.44,22.51,11.72,22.79,12.06,22.79z"
                  />
                  <path
                    d="M20.78,13.31c0.35,0,0.63-0.28,0.63-0.63c0-0.34-0.28-0.62-0.63-0.62H16.8c-0.35,0-0.63,0.28-0.63,0.62v9.44
                                                  c0,0.35,0.28,0.63,0.63,0.63h3.98c0.35,0,0.63-0.28,0.63-0.63c0-0.34-0.28-0.62-0.63-0.62h-3.35v-3.47h3.06
                                                  c0.34,0,0.62-0.28,0.62-0.63c0-0.34-0.28-0.62-0.62-0.62h-3.06v-3.47H20.78z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.58,17.39l-2.01,0.01l-0.01-4.13h2.02c1.15,0,2.12,0.94,2.12,2.06
                                                  C36.7,16.44,35.73,17.39,34.58,17.39z M34.58,12.01h-2.65c-0.35,0-0.63,0.28-0.63,0.63v9.53c0,0.34,0.28,0.62,0.63,0.62
                                                  c0.34,0,0.62-0.28,0.62-0.62v-3.52l2.03-0.01c1.86,0,3.37-1.48,3.37-3.31S36.44,12.01,34.58,12.01z"
                  />
                  <path
                    d="M40.59,7.99h-1.5c-0.34,0-0.62,0.28-0.62,0.62c0,0.35,0.28,0.63,0.62,0.63h1.5c0.53,0,0.95,0.42,0.95,0.95v13.76
                                                  c0,0.52-0.42,0.94-0.95,0.94H25.9c-0.84,0-1.63,0.38-2.17,1.02l-1.13,1.38c-0.3,0.36-0.74,0.56-1.2,0.56c-0.47,0-0.91-0.2-1.2-0.56
                                                  l-1.14-1.38c-0.54-0.64-1.33-1.02-2.17-1.02H2.2c-0.52,0-0.95-0.42-0.95-0.94v-1.27c0-0.34-0.28-0.62-0.63-0.62
                                                  C0.28,22.06,0,22.34,0,22.68v1.27c0,1.21,0.98,2.2,2.2,2.2h14.69c0.47,0,0.9,0.2,1.2,0.56l1.14,1.38c0.54,0.65,1.33,1.02,2.17,1.02
                                                  s1.63-0.37,2.16-1.02l1.14-1.38c0.3-0.36,0.74-0.56,1.2-0.56h14.69c1.22,0,2.2-0.99,2.2-2.2V10.19C42.79,8.97,41.81,7.99,40.59,7.99
                                                  z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.55,3.83c0.43,0.54,1.1,0.89,1.85,0.89c0.74,0,1.41-0.35,1.84-0.89l7.4,4.16
                                                  H12.15L19.55,3.83z M21.4,1.25c0.61,0,1.1,0.5,1.1,1.11s-0.49,1.1-1.1,1.1s-1.11-0.49-1.11-1.1S20.79,1.25,21.4,1.25z M0.62,20.8
                                                  c0.35,0,0.63-0.28,0.63-0.62v-9.99c0-0.53,0.43-0.95,0.95-0.95h34.39c0.34,0,0.63-0.28,0.63-0.63c0-0.34-0.29-0.62-0.63-0.62h-3.38
                                                  l-9.47-5.32c0.01-0.1,0.02-0.21,0.02-0.31C23.76,1.06,22.7,0,21.4,0c-1.31,0-2.37,1.06-2.37,2.36c0,0.1,0.01,0.21,0.03,0.31
                                                  L9.59,7.99H2.2c-1.22,0-2.2,0.98-2.2,2.2v9.99C0,20.52,0.28,20.8,0.62,20.8z"
                  />
                </svg>
              </div>
              <h6>Visit Support Centre</h6>
            </Link>
          </li>
          <li>
            <Link>
              <div className="icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="33.75px"
                  height="33.71px"
                  viewBox="0 0 33.75 33.71"
                  enableBackground="new 0 0 33.75 33.71"
                  xmlSpace="preserve"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.84,24.38c-1.09,0-1.97-0.88-1.97-1.97V21.1c0.64,0.25,1.34,0.38,2.04,0.38
                                                  c0.67,0,1.31-0.11,1.9-0.33v1.26C18.81,23.5,17.92,24.38,16.84,24.38z M12.29,11.97v-1.81c0-0.97,0.45-1.88,1.22-2.46l0.34,0.64
                                                  c0.09,0.17,0.25,0.27,0.44,0.27h4.49c1.52,0,2.76,1.24,2.76,2.75v0.61C18.44,11.47,15.33,11.47,12.29,11.97z M24.37,25.72
                                                  l-4.57-3.55v-1.49c1.63-0.98,2.73-2.77,2.73-4.81v-4.51c0-2.06-1.68-3.74-3.75-3.74h-4.19L14.3,7.07c-0.11-0.21-0.3-0.36-0.53-0.42
                                                  c-0.22-0.05-0.46-0.01-0.66,0.12c-1.13,0.76-1.81,2.02-1.81,3.39v5.71c0,0.57,0.09,1.13,0.25,1.67c0.08,0.26,0.36,0.4,0.62,0.32
                                                  c0.26-0.08,0.41-0.36,0.33-0.62c-0.14-0.44-0.21-0.9-0.21-1.37v-2.9c3.04-0.52,6.15-0.52,9.25,0v2.9c0,2.55-2.08,4.62-4.63,4.62
                                                  c-1.33,0-2.6-0.57-3.48-1.59c-0.18-0.2-0.5-0.22-0.7-0.05c-0.21,0.18-0.23,0.5-0.05,0.7c0.35,0.41,0.76,0.76,1.2,1.04v1.58
                                                  l-4.57,3.55c-1.44,1.12-2.27,2.81-2.27,4.63v2.87c0,0.27,0.22,0.49,0.5,0.49c0.27,0,0.49-0.22,0.49-0.49v-2.87
                                                  c0-1.51,0.69-2.92,1.89-3.85l4.1-3.19c0.38,1.19,1.5,2.06,2.82,2.06c1.32,0,2.43-0.87,2.82-2.06l4.1,3.19
                                                  c1.2,0.93,1.89,2.34,1.89,3.85v2.87c0,0.27,0.22,0.49,0.49,0.49s0.49-0.22,0.49-0.49v-2.87C26.63,28.53,25.81,26.84,24.37,25.72z"
                  />
                  <path
                    d="M11.26,30.18c-0.27,0-0.49,0.22-0.49,0.49v2.55c0,0.27,0.22,0.49,0.49,0.49c0.27,0,0.49-0.22,0.49-0.49v-2.55
                                                  C11.75,30.4,11.53,30.18,11.26,30.18z"
                  />
                  <path
                    d="M22.42,30.18c-0.28,0-0.5,0.22-0.5,0.49v2.55c0,0.27,0.22,0.49,0.5,0.49c0.27,0,0.49-0.22,0.49-0.49v-2.55
                                                  C22.91,30.4,22.69,30.18,22.42,30.18z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.98,17.97c0-1.19,0.97-2.15,2.15-2.15c1.19,0,2.15,0.96,2.15,2.15v1.35
                                                  c0,1.18-0.96,2.15-2.15,2.15c-1.18,0-2.15-0.97-2.15-2.15V17.97z M1.08,27.03l3.72-3.2c0.11-0.1,0.18-0.23,0.18-0.38v-1.22
                                                  c0.35,0.14,0.74,0.22,1.15,0.22c0.41,0,0.8-0.08,1.16-0.22v1.22c0,0.15,0.06,0.28,0.17,0.38l0.96,0.82c0.1,0.09,0.21,0.12,0.33,0.12
                                                  c0.13,0,0.27-0.05,0.37-0.17c0.18-0.2,0.16-0.52-0.05-0.69l-0.79-0.68V21.6c0.61-0.57,0.99-1.38,0.99-2.28v-1.35
                                                  c0-1.73-1.41-3.14-3.14-3.14s-3.14,1.41-3.14,3.14v1.35c0,0.9,0.39,1.71,1,2.28v1.63l-3.55,3.05c-0.23,0.2-0.36,0.48-0.36,0.77v1.72
                                                  c0,0.47,0.34,0.86,0.79,0.95c1.55,0.27,3.13,0.43,4.71,0.46h0.01c0.27,0,0.49-0.22,0.49-0.49c0.01-0.27-0.21-0.49-0.48-0.5
                                                  c-1.52-0.03-3.04-0.18-4.53-0.44v-1.7L1.08,27.03z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.7,21.47c-1.19,0-2.15-0.97-2.15-2.15v-1.35c0-1.19,0.96-2.15,2.15-2.15
                                                  c1.18,0,2.15,0.96,2.15,2.15v1.35C29.85,20.5,28.88,21.47,27.7,21.47z M28.85,23.45c0,0.15,0.07,0.28,0.17,0.38l0.82,0.7
                                                  c0.1,0.08,0.21,0.12,0.33,0.12c0.13,0,0.27-0.06,0.37-0.17c0.18-0.21,0.16-0.52-0.05-0.7l-0.65-0.55V21.6c0.61-0.57,1-1.38,1-2.28
                                                  v-1.35c0-1.73-1.41-3.14-3.14-3.14s-3.14,1.41-3.14,3.14v1.35c0,0.9,0.38,1.71,0.99,2.28v1.63l-0.79,0.68
                                                  c-0.21,0.17-0.23,0.49-0.05,0.69c0.1,0.12,0.23,0.17,0.37,0.17c0.12,0,0.23-0.03,0.33-0.12l0.96-0.82c0.11-0.1,0.17-0.23,0.17-0.38
                                                  v-1.22c0.36,0.14,0.75,0.22,1.16,0.22c0.4,0,0.79-0.08,1.15-0.22V23.45z"
                  />
                  <path
                    d="M33.39,26.28l-1.28-1.1c-0.2-0.18-0.51-0.15-0.69,0.05c-0.18,0.21-0.16,0.52,0.05,0.7l1.28,1.1l0.01,0.02v1.7
                                                  c-1.49,0.26-3.01,0.41-4.53,0.44c-0.27,0.01-0.49,0.23-0.48,0.5c0,0.27,0.22,0.49,0.49,0.49h0.01c1.58-0.03,3.16-0.19,4.7-0.46
                                                  c0.46-0.09,0.8-0.48,0.8-0.95v-1.72C33.75,26.76,33.62,26.48,33.39,26.28z"
                  />
                  <path
                    d="M29.07,8.37h-0.26c-0.18,0-0.35,0.1-0.44,0.26l-0.76,1.43l-0.74-1.43c-0.08-0.16-0.25-0.26-0.44-0.26h-3.06
                                                  c-0.28,0-0.5,0.22-0.5,0.49s0.22,0.49,0.5,0.49h2.76l0.66,1.28c0.16,0.31,0.47,0.5,0.81,0.5h0.01c0.34,0,0.65-0.18,0.81-0.49
                                                  l0.69-1.29c2.56-0.02,4.64-2.11,4.64-4.67c0-0.87-0.25-1.72-0.71-2.46c-0.14-0.23-0.44-0.31-0.68-0.16
                                                  c-0.23,0.14-0.3,0.45-0.16,0.68c0.37,0.58,0.56,1.25,0.56,1.94C32.76,6.71,31.1,8.37,29.07,8.37z"
                  />
                  <path
                    d="M4.64,9.35l0.68,1.29c0.16,0.31,0.47,0.49,0.81,0.49h0.01c0.34,0,0.65-0.19,0.81-0.5l0.66-1.28h2.36
                                                  c0.28,0,0.5-0.22,0.5-0.49s-0.22-0.49-0.5-0.49H7.31c-0.19,0-0.36,0.1-0.44,0.26l-0.74,1.43L5.37,8.63
                                                  C5.28,8.47,5.12,8.37,4.93,8.37H4.67c-2.03,0-3.68-1.66-3.68-3.69c0-2.03,1.65-3.69,3.68-3.69h24.4c0.62,0,1.23,0.16,1.77,0.46
                                                  c0.24,0.13,0.54,0.04,0.67-0.2c0.13-0.24,0.05-0.54-0.19-0.67C30.63,0.2,29.85,0,29.07,0H4.67C2.09,0,0,2.1,0,4.68
                                                  C0,7.24,2.07,9.33,4.64,9.35z"
                  />
                  <path
                    d="M7.7,4.3C7.63,4.75,8.01,5.13,8.46,5.06C8.74,5.01,8.96,4.79,9,4.52c0.08-0.45-0.31-0.83-0.76-0.76
                                                  C7.97,3.8,7.75,4.02,7.7,4.3z"
                  />
                  <path
                    d="M13.36,4.41c0,0.36,0.29,0.66,0.66,0.66c0.36,0,0.66-0.3,0.66-0.66c0-0.36-0.3-0.66-0.66-0.66
                                                  C13.65,3.75,13.36,4.05,13.36,4.41z"
                  />
                  <path
                    d="M26.05,4.41c0-0.36-0.3-0.66-0.66-0.66c-0.36,0-0.66,0.3-0.66,0.66c0,0.36,0.3,0.66,0.66,0.66
                                                  C25.75,5.07,26.05,4.77,26.05,4.41z"
                  />
                  <path
                    d="M19.07,4.41c0,0.36,0.29,0.66,0.65,0.66c0.37,0,0.66-0.3,0.66-0.66c0-0.36-0.29-0.66-0.66-0.66
                                                  C19.36,3.75,19.07,4.05,19.07,4.41z"
                  />
                </svg>
              </div>
              <h6>Join Our Community</h6>
            </Link>
          </li>
        </ul>
        <div className="btn-row text-center">
          <Link className="gradient-btn url-none">{buttonkeepcrafting}</Link>
        </div>
      </div>
      <div className="generate-ideas none">
        <ul>
          {idealist.map(function (item, i) {
            return <Idea key={i} info={item.info} chars={item.count} />
          })}
        </ul>
        <div className="btn-row text-center">
          <Link className="gradient-btn url-none">{buttonkeepcrafting}</Link>
        </div>
      </div>
    </>
  )
}

export default IdeasBox
