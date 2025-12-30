import '../Style/Nav.css'
// Link ->instead of <a> tag -> SPA - Partial Rendering
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // npm i @fortawesome/react-fontawesome
import { faHome, faPalette, 
    faShop, faLifeRing, 
    faSort, faUser, faDatabase,
    faHashtag, faCartPlus,
    faRecordVinyl, faUpLong
    } from "@fortawesome/free-solid-svg-icons";  // npm i --save @fortawesome/free-solid-svg-icons

// Step 1: To reflect the count of products in the cart items  -- Import useCart
//import { useCart } from "react-use-cart";

export default function Navbar(){
// Step 2: To reflect the count of products in the cart items  -- Create an identifier holding the Cart counts
// Gets only totalUniqueItems from useCart()   
//const { totalUniqueItems } = useCart();

    return (
        <div>
            <div className="vh-15 d-flex align-items-center position-fixed start-0 top-0" role="navigation">
            <div className="p-2">
                <div id="mainNav">
                    <ul className="ms-2">  
                    {/* // list-unstyled rounded */}
                        <li>
                            {/* <a href="home"> Normal way to create Naviagtion. InReact, we won't use <a> tag to navigate </a> */}
                            {/* Only with the help of Link component, navigation takes place in React */}
                                <Link className="vlink rounded border-0" to="Home"> 
                                <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                            </Link> 
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="Gallery">
                                <FontAwesomeIcon icon={faPalette} /> <span>Gallery</span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="Products">
                                <FontAwesomeIcon icon={faShop} /> <span>Product Details</span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="LifeCycle">
                                <FontAwesomeIcon icon={faLifeRing} /> <span>Life Cycle</span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="Sort">
                                <FontAwesomeIcon icon={faSort} /> <span> Sorting </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="Users">
                                <FontAwesomeIcon icon={faUser} /> <span> User Details - JSON </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="Crud">
                                <FontAwesomeIcon icon={faDatabase} /> <span> DB Handling-CRUD </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="ReactHooks">
                                <FontAwesomeIcon icon={faHashtag} /> <span> React Hooks - Adv. </span>
                            </Link>
                        </li>

                {/* // Step 3: To reflect the count of products in the cart items  -- To render the count of products in the cart */}
                        <li>
                            <Link className="vlink rounded border-0" to="AddToCart">
                                <FontAwesomeIcon icon={faCartPlus} /> 
                                {/* <sup> {totalUniqueItems}</sup> */}
                                <span> Cart Demo </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="RenderProps">
                                <FontAwesomeIcon icon={faRecordVinyl} /> 
                                <span> Render Props </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="vlink rounded border-0" to="HOC">
                                <FontAwesomeIcon icon={faUpLong} /> 
                                <span> Higher Order Components </span>
                            </Link>
                        </li>



                    </ul>
                </div>
            </div>

            </div>
            </div>
    );
    }


 //// With all the concepts 
//  import "../Styles/Nav.css";
// //Link -> instead of <a> tag -> SPA - Partial Rendering
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAnchor,
//   faCartArrowDown,
//   faDatabase,
//   faGaugeHigh,
//   faHome,
//   faLink,
//   faPalette,
//   faRecycle,
//   faShop,
//   faSort,
//   faTable,
//   faTruckLoading,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "react-use-cart";



 // export default function Nav() 
 //   //Cart totalUniqueItems in Cart
//   const { totalUniqueItems } = useCart();

//   return (
//     <div>
//       <div
//         className="vh-15 d-flex align-items-center position-fixed start-0 top-0"
//         role="navigation">
//         <div className="p-2">
//           <div id="mainNav">
//             <ul className="list-unstyled rounded ms-2 bg">
//               <li>
//                 {/* <a href="home"></a> */}
 //                 <Link className="vlink rounded border-0" to="">
//                   <FontAwesomeIcon icon={faHome} /> <span>Home</span>
//                 </Link>
//               </li> 
 //               <li>
//                 <Link className="vlink rounded border-0" to="Gallery">
//                   <FontAwesomeIcon icon={faPalette} /> <span>Gallery</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="Products">
//                   <FontAwesomeIcon icon={faShop} /> <span>Products</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="sort">
//                   <FontAwesomeIcon icon={faSort} /> <span>Sort Movies</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="lifecycle">
//                   <FontAwesomeIcon icon={faRecycle} />{" "}
//                   <span>React Lifecycle</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="users">
//                   <FontAwesomeIcon icon={faUser} /> <span>User Details</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="crud">
//                   <FontAwesomeIcon icon={faTable} /> <span>User CRUD</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="axios">
//                   <FontAwesomeIcon icon={faDatabase} /> <span>Axios</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="cart">
//                   <FontAwesomeIcon icon={faCartArrowDown} />
//                   <sup>{totalUniqueItems}</sup>
//                   <span>Cart Demo</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="hooks">
//                   <FontAwesomeIcon icon={faAnchor} />
//                   <span>React Hooks</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="renderprops">
//                   <FontAwesomeIcon icon={faLink} />
//                   <span>React Props</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="hoc">
//                   <FontAwesomeIcon icon={faGaugeHigh} />
//                   <span>React HOC</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="vlink rounded border-0" to="lazy">
//                   <FontAwesomeIcon icon={faTruckLoading} />
//                   <span>React Lazy Loading</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 
  
