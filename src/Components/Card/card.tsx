
// const CardList = [
//     {
//     title: 'Substaion name',
//     alerttext:'Change detected - 08/06/23',
//     alerticon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 2.66667C5.05446 2.66667 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 7.99998 2.66667ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.99998 4.66667C8.36817 4.66667 8.66665 4.96514 8.66665 5.33333V8C8.66665 8.36819 8.36817 8.66667 7.99998 8.66667C7.63179 8.66667 7.33331 8.36819 7.33331 8V5.33333C7.33331 4.96514 7.63179 4.66667 7.99998 4.66667ZM7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10H8.00665C8.37484 10 8.67331 10.2985 8.67331 10.6667C8.67331 11.0349 8.37484 11.3333 8.00665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667Z" fill="#CC1D1D"/>
//   </svg>,
//     substationbtn: 'Go to substaion to review changes',
//     substationbtnicon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M8.19528 3.5286C8.45563 3.26825 8.87774 3.26825 9.13809 3.5286L13.1381 7.5286C13.3984 7.78895 13.3984 8.21106 13.1381 8.47141L9.13809 12.4714C8.87774 12.7318 8.45563 12.7318 8.19528 12.4714C7.93493 12.2111 7.93493 11.7889 8.19528 11.5286L11.0572 8.66667H3.33335C2.96516 8.66667 2.66669 8.36819 2.66669 8C2.66669 7.63181 2.96516 7.33334 3.33335 7.33334H11.0572L8.19528 4.47141C7.93493 4.21106 7.93493 3.78895 8.19528 3.5286Z" fill="white"/>
//     </svg>,
//     },
// ]

import { CardList } from "./cardarray";

export const Card = () => {
return(
    <>
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
      
        <div className="row">
        {CardList.map((item, index)=> (
    
    
        <div key={index}>
        <section className="SRcardframe">
        <div className="SRcard1">

        <div className="SRcardh1">{item.icon}{item.title}                 
        <div className="pendingbadge">{item.pendingicon}{item.pending}</div>
        </div>
        
        <div className="statuslabel">
        {item.alerticon} {item.alerttext}</div>

        <div className="substationbutton">{item.substationbtn}
        {item.substationbtnicon}</div>
        
        <div className="card1bottom">
          <div className="badge1arraycards">Zone S</div>
            <div className="regionxyz"> Region XYZ</div>
        </div>
            </div>
        </section>
        </div>
        
    )

    )}
    </div></>
)
  };
  