import React from "react";
export const ServiceRequests = () => {
  return (
    <section className="SR">
      <div className="SRframe1">
        <p className="SRtext">Your Service Requests</p>
        <div className="linebreak"></div>
        <p className="SRtext2">Filter: </p>
        <div className="SRbolt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.8777 9.55004C19.7946 9.38513 19.6674 9.24645 19.5103 9.14937C19.3532 9.05229 19.1723 9.0006 18.9877 9.00004H13.9877V3.00004C13.9984 2.78073 13.9366 2.56397 13.8119 2.38324C13.6872 2.20251 13.5065 2.06785 13.2977 2.00004C13.0969 1.93399 12.8803 1.93324 12.6791 1.99792C12.4779 2.0626 12.3023 2.18937 12.1777 2.36004L4.17765 13.36C4.07742 13.5049 4.01723 13.6737 4.00319 13.8493C3.98914 14.0249 4.02173 14.2011 4.09765 14.36C4.16758 14.5418 4.28904 14.6992 4.44714 14.8129C4.60525 14.9266 4.7931 14.9916 4.98765 15H9.98765V21C9.98781 21.2109 10.0546 21.4164 10.1785 21.587C10.3025 21.7576 10.4772 21.8847 10.6777 21.95C10.7781 21.9812 10.8825 21.998 10.9877 22C11.1454 22.0005 11.3011 21.9635 11.4419 21.8923C11.5826 21.821 11.7046 21.7174 11.7977 21.59L19.7977 10.59C19.9054 10.4408 19.9699 10.2648 19.984 10.0813C19.9981 9.8978 19.9613 9.71397 19.8777 9.55004ZM11.9877 17.92V14C11.9877 13.7348 11.8823 13.4805 11.6948 13.2929C11.5072 13.1054 11.2529 13 10.9877 13H6.98765L11.9877 6.08004V10C11.9877 10.2653 12.093 10.5196 12.2805 10.7071C12.4681 10.8947 12.7224 11 12.9877 11H16.9877L11.9877 17.92Z"
              fill="#171F22"
            />
          </svg>
        </div>
        <div className="SRframeicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 3C7.55228 3 8 3.44772 8 4V6H16V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18V16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18H8V20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20V18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H6V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H6V4C6 3.44772 6.44772 3 7 3ZM8 8V16H16V8H8Z"
              fill="#171F22"
            />
          </svg>
        </div>
        <div className="SRtext3">Pending</div>
        <div className="seehistory">
          <div className="seehistorybase">
            <p className="seehistorytext">See history</p>
            <div className="seehistoryicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5092 3.92303C10.5219 3.06142 9.25189 2.59345 7.94156 2.60842C6.63123 2.62339 5.37227 3.12024 4.40488 4.00418C3.43749 4.88811 2.82939 6.09727 2.69659 7.40094C2.65928 7.76723 2.33209 8.03392 1.9658 7.99661C1.5995 7.9593 1.33281 7.63211 1.37012 7.26582C1.53612 5.63623 2.29624 4.12479 3.50548 3.01987C4.71472 1.91494 6.28841 1.29388 7.92633 1.27517C9.56424 1.25647 11.1517 1.84142 12.3859 2.91844C13.62 3.99545 14.4145 5.48914 14.6177 7.11451C14.8208 8.73988 14.4185 10.3832 13.4874 11.7308C12.5563 13.0785 11.1617 14.0362 9.56959 14.4213C7.97747 14.8063 6.29931 14.5917 4.8553 13.8185C4.00684 13.3641 3.27411 12.7356 2.70002 11.9823V13.3334C2.70002 13.7016 2.40155 14 2.03336 14C1.66517 14 1.36669 13.7016 1.36669 13.3334V10C1.36669 9.63186 1.66517 9.33338 2.03336 9.33338H2.35114C2.36149 9.33314 2.37182 9.33314 2.38213 9.33338H5.36669C5.73488 9.33338 6.03336 9.63186 6.03336 10C6.03336 10.3682 5.73488 10.6667 5.36669 10.6667H3.41801C3.91102 11.496 4.62332 12.1818 5.48474 12.6431C6.63995 13.2617 7.98247 13.4333 9.25616 13.1253C10.5299 12.8173 11.6456 12.0511 12.3904 10.9729C13.1353 9.89481 13.4572 8.58018 13.2946 7.27989C13.1321 5.97959 12.4965 4.78464 11.5092 3.92303ZM8.00002 4.66667C8.36821 4.66667 8.66669 4.96514 8.66669 5.33333V7.72386L9.80476 8.86193C10.0651 9.12228 10.0651 9.54439 9.80476 9.80474C9.54441 10.0651 9.1223 10.0651 8.86195 9.80474L7.52862 8.4714C7.40359 8.34638 7.33335 8.17681 7.33335 8V5.33333C7.33335 4.96514 7.63183 4.66667 8.00002 4.66667Z"
                  fill="#617177"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <section className="SRcardframe">
        <div className="SRcard1">
          <div className="SRcardh1">
            <div className="SRcardbolticon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.8777 9.55004C19.7946 9.38513 19.6674 9.24645 19.5103 9.14937C19.3532 9.05229 19.1723 9.0006 18.9877 9.00004H13.9877V3.00004C13.9984 2.78073 13.9366 2.56397 13.8119 2.38324C13.6872 2.20251 13.5065 2.06785 13.2977 2.00004C13.0969 1.93399 12.8803 1.93324 12.6791 1.99792C12.4779 2.0626 12.3023 2.18937 12.1777 2.36004L4.17765 13.36C4.07742 13.5049 4.01723 13.6737 4.00319 13.8493C3.98914 14.0249 4.02173 14.2011 4.09765 14.36C4.16758 14.5418 4.28904 14.6992 4.44714 14.8129C4.60525 14.9266 4.7931 14.9916 4.98765 15H9.98765V21C9.98781 21.2109 10.0546 21.4164 10.1785 21.587C10.3025 21.7576 10.4772 21.8847 10.6777 21.95C10.7781 21.9812 10.8825 21.998 10.9877 22C11.1454 22.0005 11.3011 21.9635 11.4419 21.8923C11.5826 21.821 11.7046 21.7174 11.7977 21.59L19.7977 10.59C19.9054 10.4408 19.9699 10.2648 19.984 10.0813C19.9981 9.8978 19.9613 9.71397 19.8777 9.55004ZM11.9877 17.92V14C11.9877 13.7348 11.8823 13.4805 11.6948 13.2929C11.5072 13.1054 11.2529 13 10.9877 13H6.98765L11.9877 6.08004V10C11.9877 10.2653 12.093 10.5196 12.2805 10.7071C12.4681 10.8947 12.7224 11 12.9877 11H16.9877L11.9877 17.92Z"
                  fill="#171F22"
                />
              </svg>
            </div>
            <h3 className="SRcardtitle">Substation name </h3>
            <label className="pendingbadge">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 1.33333C8.36817 1.33333 8.66665 1.63181 8.66665 2V4C8.66665 4.36819 8.36817 4.66667 7.99998 4.66667C7.63179 4.66667 7.33331 4.36819 7.33331 4V2C7.33331 1.63181 7.63179 1.33333 7.99998 1.33333ZM3.26191 3.26199C3.52226 3.00164 3.94437 3.00164 4.20472 3.26199L5.63805 4.69533C5.8984 4.95568 5.8984 5.37779 5.63805 5.63814C5.37771 5.89849 4.9556 5.89849 4.69525 5.63814L3.26191 4.2048C3.00156 3.94445 3.00156 3.52234 3.26191 3.26199ZM12.7381 3.26199C12.9984 3.52234 12.9984 3.94445 12.7381 4.2048L11.3047 5.63814C11.0444 5.89849 10.6223 5.89849 10.3619 5.63814C10.1016 5.37779 10.1016 4.95568 10.3619 4.69533L11.7952 3.26199C12.0556 3.00164 12.4777 3.00164 12.7381 3.26199ZM1.33331 8C1.33331 7.63181 1.63179 7.33333 1.99998 7.33333H3.99998C4.36817 7.33333 4.66665 7.63181 4.66665 8C4.66665 8.36819 4.36817 8.66667 3.99998 8.66667H1.99998C1.63179 8.66667 1.33331 8.36819 1.33331 8ZM11.3333 8C11.3333 7.63181 11.6318 7.33333 12 7.33333H14C14.3682 7.33333 14.6666 7.63181 14.6666 8C14.6666 8.36819 14.3682 8.66667 14 8.66667H12C11.6318 8.66667 11.3333 8.36819 11.3333 8ZM5.63806 10.3619C5.8984 10.6223 5.8984 11.0444 5.63805 11.3047L4.20472 12.7381C3.94437 12.9984 3.52226 12.9984 3.26191 12.7381C3.00156 12.4777 3.00156 12.0556 3.26191 11.7953L4.69525 10.3619C4.9556 10.1016 5.37771 10.1016 5.63806 10.3619ZM10.3619 10.3619C10.6223 10.1016 11.0444 10.1016 11.3047 10.3619L12.7381 11.7953C12.9984 12.0556 12.9984 12.4777 12.7381 12.7381C12.4777 12.9984 12.0556 12.9984 11.7952 12.7381L10.3619 11.3047C10.1016 11.0444 10.1016 10.6223 10.3619 10.3619ZM7.99998 11.3333C8.36817 11.3333 8.66665 11.6318 8.66665 12V14C8.66665 14.3682 8.36817 14.6667 7.99998 14.6667C7.63179 14.6667 7.33331 14.3682 7.33331 14V12C7.33331 11.6318 7.63179 11.3333 7.99998 11.3333Z"
                    fill="#D29F00"
                  />
                </svg>
              </div>
              <p className="pendingtext">Pending</p>
            </label>
          </div>
          <div className="statusalert">
            <label className="statuslabel">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 2.66667C5.05446 2.66667 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 7.99998 2.66667ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.99998 4.66667C8.36817 4.66667 8.66665 4.96514 8.66665 5.33333V8C8.66665 8.36819 8.36817 8.66667 7.99998 8.66667C7.63179 8.66667 7.33331 8.36819 7.33331 8V5.33333C7.33331 4.96514 7.63179 4.66667 7.99998 4.66667ZM7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10H8.00665C8.37484 10 8.67331 10.2985 8.67331 10.6667C8.67331 11.0349 8.37484 11.3333 8.00665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667Z"
                    fill="#CC1D1D"
                  />
                </svg>
              </div>
              <p className="statusalerttext">Change detected - 08/06/23</p>
            </label>
          </div>
          <label className="substationbutton">
            <p className="substationbuttontext">
              Go to substation to review changes
            </p>
            <div className="pendingicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.19528 3.5286C8.45563 3.26825 8.87774 3.26825 9.13809 3.5286L13.1381 7.5286C13.3984 7.78895 13.3984 8.21106 13.1381 8.47141L9.13809 12.4714C8.87774 12.7318 8.45563 12.7318 8.19528 12.4714C7.93493 12.2111 7.93493 11.7889 8.19528 11.5286L11.0572 8.66667H3.33335C2.96516 8.66667 2.66669 8.36819 2.66669 8C2.66669 7.63181 2.96516 7.33334 3.33335 7.33334H11.0572L8.19528 4.47141C7.93493 4.21106 7.93493 3.78895 8.19528 3.5286Z"
                  fill="white"
                />
              </svg>
            </div>
          </label>
          <div className="card1bottom">
            <label className="badge1noshadow">
              <p className="badge1text">Zone S</p>
            </label>
            <label className="regionxyz">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00002 3.63214V8.07763C4.5182 7.84013 5.08602 7.71387 5.66669 7.71387C6.7137 7.71387 7.71897 8.12439 8.46669 8.8573C8.96516 9.3459 9.63535 9.61958 10.3334 9.61958C10.9418 9.61958 11.5291 9.41158 12 9.03454V4.58912C11.4819 4.82663 10.914 4.95292 10.3334 4.95292C9.28634 4.95292 8.28107 4.54239 7.53335 3.80949C7.03488 3.32088 6.36469 3.0472 5.66669 3.0472C5.05819 3.0472 4.47088 3.25514 4.00002 3.63214ZM4.00002 9.63219C4.47089 9.25517 5.05822 9.0472 5.66669 9.0472C6.36469 9.0472 7.03488 9.32088 7.53335 9.80949C8.28107 10.5424 9.28634 10.9529 10.3334 10.9529C11.3804 10.9529 12.3857 10.5423 13.1334 9.80943C13.2613 9.68404 13.3334 9.51246 13.3334 9.33333V3.33333C13.3334 3.0649 13.1724 2.82266 12.9249 2.7187C12.6774 2.61474 12.3917 2.66934 12.2 2.85724C11.7015 3.34586 11.0313 3.61958 10.3334 3.61958C9.63535 3.61958 8.96516 3.3459 8.46669 2.8573C7.71897 2.12439 6.7137 1.71387 5.66669 1.71387C4.61971 1.71387 3.61442 2.12431 2.86669 2.85724C2.73877 2.98262 2.66669 3.15421 2.66669 3.33333V9.33289C2.66669 9.33325 2.66669 9.33361 2.66669 9.33397V14C2.66669 14.3682 2.96516 14.6667 3.33335 14.6667C3.70154 14.6667 4.00002 14.3682 4.00002 14V9.63219Z"
                    fill="#171F22"
                  />
                </svg>
              </div>
              <p className="regionxyztext">Region XYZ</p>
            </label>
            <div className="otherbalancesaffected">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 2.66666C5.05446 2.66666 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66666 7.99998 2.66666ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.33331 5.33333C7.33331 4.96514 7.63179 4.66666 7.99998 4.66666H8.00665C8.37484 4.66666 8.67331 4.96514 8.67331 5.33333C8.67331 5.70152 8.37484 6 8.00665 6H7.99998C7.63179 6 7.33331 5.70152 7.33331 5.33333ZM6.66665 8C6.66665 7.6318 6.96512 7.33333 7.33331 7.33333H7.99998C8.36817 7.33333 8.66665 7.6318 8.66665 8V10C9.03484 10 9.33331 10.2985 9.33331 10.6667C9.33331 11.0349 9.03484 11.3333 8.66665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667V8.66666C6.96512 8.66666 6.66665 8.36819 6.66665 8Z"
                    fill="#617177"
                  />
                </svg>
              </div>
              <p className="seehistorytext">Other balances affected</p>
            </div>
          </div>
        </div>

        <div className="SRcard1">
          <div className="SRcardh2">
            <div className="SRcardbolticon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 3C7.55228 3 8 3.44772 8 4V6H16V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18V16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18H8V20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20V18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H6V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H6V4C6 3.44772 6.44772 3 7 3ZM8 8V16H16V8H8Z"
                  fill="#171F22"
                />
              </svg>
            </div>
            <h3 className="SRcardtitle">Balance name </h3>
          </div>
          <div className="statusalert">
            <label className="statuslabel">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 2.66667C5.05446 2.66667 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 7.99998 2.66667ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.99998 4.66667C8.36817 4.66667 8.66665 4.96514 8.66665 5.33333V8C8.66665 8.36819 8.36817 8.66667 7.99998 8.66667C7.63179 8.66667 7.33331 8.36819 7.33331 8V5.33333C7.33331 4.96514 7.63179 4.66667 7.99998 4.66667ZM7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10H8.00665C8.37484 10 8.67331 10.2985 8.67331 10.6667C8.67331 11.0349 8.37484 11.3333 8.00665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667Z"
                    fill="#CC1D1D"
                  />
                </svg>
              </div>
              <p className="statusalerttext">Error detected - 08/06/23</p>
            </label>
          </div>
          <label className="substationbutton">
            <p className="substationbuttontext">
              Go to substation to review changes
            </p>
            <div className="pendingicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.19528 3.5286C8.45563 3.26825 8.87774 3.26825 9.13809 3.5286L13.1381 7.5286C13.3984 7.78895 13.3984 8.21106 13.1381 8.47141L9.13809 12.4714C8.87774 12.7318 8.45563 12.7318 8.19528 12.4714C7.93493 12.2111 7.93493 11.7889 8.19528 11.5286L11.0572 8.66667H3.33335C2.96516 8.66667 2.66669 8.36819 2.66669 8C2.66669 7.63181 2.96516 7.33334 3.33335 7.33334H11.0572L8.19528 4.47141C7.93493 4.21106 7.93493 3.78895 8.19528 3.5286Z"
                  fill="white"
                />
              </svg>
            </div>
          </label>
          <div className="card1bottom">
            <label className="badge1noshadow">
              <p className="badge1text">Zone S</p>
            </label>
            <label className="regionxyz">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00002 3.63214V8.07763C4.5182 7.84013 5.08602 7.71387 5.66669 7.71387C6.7137 7.71387 7.71897 8.12439 8.46669 8.8573C8.96516 9.3459 9.63535 9.61958 10.3334 9.61958C10.9418 9.61958 11.5291 9.41158 12 9.03454V4.58912C11.4819 4.82663 10.914 4.95292 10.3334 4.95292C9.28634 4.95292 8.28107 4.54239 7.53335 3.80949C7.03488 3.32088 6.36469 3.0472 5.66669 3.0472C5.05819 3.0472 4.47088 3.25514 4.00002 3.63214ZM4.00002 9.63219C4.47089 9.25517 5.05822 9.0472 5.66669 9.0472C6.36469 9.0472 7.03488 9.32088 7.53335 9.80949C8.28107 10.5424 9.28634 10.9529 10.3334 10.9529C11.3804 10.9529 12.3857 10.5423 13.1334 9.80943C13.2613 9.68404 13.3334 9.51246 13.3334 9.33333V3.33333C13.3334 3.0649 13.1724 2.82266 12.9249 2.7187C12.6774 2.61474 12.3917 2.66934 12.2 2.85724C11.7015 3.34586 11.0313 3.61958 10.3334 3.61958C9.63535 3.61958 8.96516 3.3459 8.46669 2.8573C7.71897 2.12439 6.7137 1.71387 5.66669 1.71387C4.61971 1.71387 3.61442 2.12431 2.86669 2.85724C2.73877 2.98262 2.66669 3.15421 2.66669 3.33333V9.33289C2.66669 9.33325 2.66669 9.33361 2.66669 9.33397V14C2.66669 14.3682 2.96516 14.6667 3.33335 14.6667C3.70154 14.6667 4.00002 14.3682 4.00002 14V9.63219Z"
                    fill="#171F22"
                  />
                </svg>
              </div>
              <p className="regionxyztext">Region XYZ</p>
            </label>
            <div className="otherbalancesaffected">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 2.66666C5.05446 2.66666 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66666 7.99998 2.66666ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.33331 5.33333C7.33331 4.96514 7.63179 4.66666 7.99998 4.66666H8.00665C8.37484 4.66666 8.67331 4.96514 8.67331 5.33333C8.67331 5.70152 8.37484 6 8.00665 6H7.99998C7.63179 6 7.33331 5.70152 7.33331 5.33333ZM6.66665 8C6.66665 7.6318 6.96512 7.33333 7.33331 7.33333H7.99998C8.36817 7.33333 8.66665 7.6318 8.66665 8V10C9.03484 10 9.33331 10.2985 9.33331 10.6667C9.33331 11.0349 9.03484 11.3333 8.66665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667V8.66666C6.96512 8.66666 6.66665 8.36819 6.66665 8Z"
                    fill="#617177"
                  />
                </svg>
              </div>
              <p className="seehistorytext">Other balances affected</p>
            </div>
          </div>
        </div>

        <div className="SRcard1">
          <div className="SRcardh2">
            <div className="SRcardbolticon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 3C7.55228 3 8 3.44772 8 4V6H16V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18V16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18H8V20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20V18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H6V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H6V4C6 3.44772 6.44772 3 7 3ZM8 8V16H16V8H8Z"
                  fill="#171F22"
                />
              </svg>
            </div>
            <h3 className="SRcardtitle"> NA-V14 </h3>
          </div>
          <div className="statusalert">
            <label className="statuslabel">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 2.66667C5.05446 2.66667 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 7.99998 2.66667ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.99998 4.66667C8.36817 4.66667 8.66665 4.96514 8.66665 5.33333V8C8.66665 8.36819 8.36817 8.66667 7.99998 8.66667C7.63179 8.66667 7.33331 8.36819 7.33331 8V5.33333C7.33331 4.96514 7.63179 4.66667 7.99998 4.66667ZM7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10H8.00665C8.37484 10 8.67331 10.2985 8.67331 10.6667C8.67331 11.0349 8.37484 11.3333 8.00665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667Z"
                    fill="#CC1D1D"
                  />
                </svg>
              </div>
              <p className="statusalerttext">Error detected - 08/06/23</p>
            </label>
          </div>
          <label className="substationbutton">
            <p className="substationbuttontext">
              Go to substation to review changes
            </p>
            <div className="pendingicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.19528 3.5286C8.45563 3.26825 8.87774 3.26825 9.13809 3.5286L13.1381 7.5286C13.3984 7.78895 13.3984 8.21106 13.1381 8.47141L9.13809 12.4714C8.87774 12.7318 8.45563 12.7318 8.19528 12.4714C7.93493 12.2111 7.93493 11.7889 8.19528 11.5286L11.0572 8.66667H3.33335C2.96516 8.66667 2.66669 8.36819 2.66669 8C2.66669 7.63181 2.96516 7.33334 3.33335 7.33334H11.0572L8.19528 4.47141C7.93493 4.21106 7.93493 3.78895 8.19528 3.5286Z"
                  fill="white"
                />
              </svg>
            </div>
          </label>

          <div className="card3bottom">
            <label className="badge1noshadow">
              <p className="badge1text">Zone S</p>
            </label>
            <label className="regionxyz">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00002 3.63214V8.07763C4.5182 7.84013 5.08602 7.71387 5.66669 7.71387C6.7137 7.71387 7.71897 8.12439 8.46669 8.8573C8.96516 9.3459 9.63535 9.61958 10.3334 9.61958C10.9418 9.61958 11.5291 9.41158 12 9.03454V4.58912C11.4819 4.82663 10.914 4.95292 10.3334 4.95292C9.28634 4.95292 8.28107 4.54239 7.53335 3.80949C7.03488 3.32088 6.36469 3.0472 5.66669 3.0472C5.05819 3.0472 4.47088 3.25514 4.00002 3.63214ZM4.00002 9.63219C4.47089 9.25517 5.05822 9.0472 5.66669 9.0472C6.36469 9.0472 7.03488 9.32088 7.53335 9.80949C8.28107 10.5424 9.28634 10.9529 10.3334 10.9529C11.3804 10.9529 12.3857 10.5423 13.1334 9.80943C13.2613 9.68404 13.3334 9.51246 13.3334 9.33333V3.33333C13.3334 3.0649 13.1724 2.82266 12.9249 2.7187C12.6774 2.61474 12.3917 2.66934 12.2 2.85724C11.7015 3.34586 11.0313 3.61958 10.3334 3.61958C9.63535 3.61958 8.96516 3.3459 8.46669 2.8573C7.71897 2.12439 6.7137 1.71387 5.66669 1.71387C4.61971 1.71387 3.61442 2.12431 2.86669 2.85724C2.73877 2.98262 2.66669 3.15421 2.66669 3.33333V9.33289C2.66669 9.33325 2.66669 9.33361 2.66669 9.33397V14C2.66669 14.3682 2.96516 14.6667 3.33335 14.6667C3.70154 14.6667 4.00002 14.3682 4.00002 14V9.63219Z"
                    fill="#171F22"
                  />
                </svg>
              </div>
              <p className="regionxyztext">Region XYZ</p>
            </label>
          </div>
        </div>

        <div className="SRcard1">
          <div className="SRcardh2">
            <div className="SRcardbolticon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 3C7.55228 3 8 3.44772 8 4V6H16V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18V16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18H8V20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20V18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H6V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H6V4C6 3.44772 6.44772 3 7 3ZM8 8V16H16V8H8Z"
                  fill="#171F22"
                />
              </svg>
            </div>
            <h3 className="SRcardtitle">NA-V14 </h3>
          </div>
          <div className="statusalert">
            <label className="statuslabel">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 2.66667C5.05446 2.66667 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 7.99998 2.66667ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.99998 4.66667C8.36817 4.66667 8.66665 4.96514 8.66665 5.33333V8C8.66665 8.36819 8.36817 8.66667 7.99998 8.66667C7.63179 8.66667 7.33331 8.36819 7.33331 8V5.33333C7.33331 4.96514 7.63179 4.66667 7.99998 4.66667ZM7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10H8.00665C8.37484 10 8.67331 10.2985 8.67331 10.6667C8.67331 11.0349 8.37484 11.3333 8.00665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667Z"
                    fill="#CC1D1D"
                  />
                </svg>
              </div>
              <p className="statusalerttext">Change detected - 08/06/23</p>
            </label>
          </div>
          <label className="substationbutton">
            <p className="substationbuttontext">
              Go to substation to review changes
            </p>
            <div className="pendingicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.19528 3.5286C8.45563 3.26825 8.87774 3.26825 9.13809 3.5286L13.1381 7.5286C13.3984 7.78895 13.3984 8.21106 13.1381 8.47141L9.13809 12.4714C8.87774 12.7318 8.45563 12.7318 8.19528 12.4714C7.93493 12.2111 7.93493 11.7889 8.19528 11.5286L11.0572 8.66667H3.33335C2.96516 8.66667 2.66669 8.36819 2.66669 8C2.66669 7.63181 2.96516 7.33334 3.33335 7.33334H11.0572L8.19528 4.47141C7.93493 4.21106 7.93493 3.78895 8.19528 3.5286Z"
                  fill="white"
                />
              </svg>
            </div>
          </label>
          <div className="card3bottom">
            <label className="badge1noshadow">
              <p className="badge1text">Zone S</p>
            </label>
            <label className="regionxyz">
              <div className="pendingicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00002 3.63214V8.07763C4.5182 7.84013 5.08602 7.71387 5.66669 7.71387C6.7137 7.71387 7.71897 8.12439 8.46669 8.8573C8.96516 9.3459 9.63535 9.61958 10.3334 9.61958C10.9418 9.61958 11.5291 9.41158 12 9.03454V4.58912C11.4819 4.82663 10.914 4.95292 10.3334 4.95292C9.28634 4.95292 8.28107 4.54239 7.53335 3.80949C7.03488 3.32088 6.36469 3.0472 5.66669 3.0472C5.05819 3.0472 4.47088 3.25514 4.00002 3.63214ZM4.00002 9.63219C4.47089 9.25517 5.05822 9.0472 5.66669 9.0472C6.36469 9.0472 7.03488 9.32088 7.53335 9.80949C8.28107 10.5424 9.28634 10.9529 10.3334 10.9529C11.3804 10.9529 12.3857 10.5423 13.1334 9.80943C13.2613 9.68404 13.3334 9.51246 13.3334 9.33333V3.33333C13.3334 3.0649 13.1724 2.82266 12.9249 2.7187C12.6774 2.61474 12.3917 2.66934 12.2 2.85724C11.7015 3.34586 11.0313 3.61958 10.3334 3.61958C9.63535 3.61958 8.96516 3.3459 8.46669 2.8573C7.71897 2.12439 6.7137 1.71387 5.66669 1.71387C4.61971 1.71387 3.61442 2.12431 2.86669 2.85724C2.73877 2.98262 2.66669 3.15421 2.66669 3.33333V9.33289C2.66669 9.33325 2.66669 9.33361 2.66669 9.33397V14C2.66669 14.3682 2.96516 14.6667 3.33335 14.6667C3.70154 14.6667 4.00002 14.3682 4.00002 14V9.63219Z"
                    fill="#171F22"
                  />
                </svg>
              </div>
              <p className="regionxyztext">Namur 70</p>
            </label>
          </div>
        </div>
      </section>
    </section>
  );
};
