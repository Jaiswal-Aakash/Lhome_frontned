import React from 'react';
import '../styles/bookfreedesign.module.scss'
import PageHeader from "./components/PageHeader";
import * as config from "./../next.config.js";
import css from '../styles/bookfreedesign.module.scss'
import Selectbutton from './components/SelectButton/selectbutton';
import { MdApartment,MdOutlineHolidayVillage,MdHome  } from "react-icons/md";


interface homeproperties {
    screenwidth: number;
    screenheight: number;

}
const Bookfreedesign: React.FC<homeproperties> = ({ screenwidth, screenheight }) => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const living = React.useRef(null);

    const page = React.useRef(null);
    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);

    const pageheaderMonitor = () => {
        if (page.current.scrollTop > prevPosition) {
            setPrev(page.current.scrollTop)
            setHidden(true)
        } else {
            setHidden(false)
            setPrev(page.current.scrollTop)

        }
    }
    
//     const labels: string[] = [
//         { label: "Apartment", icon: <MdApartment/> },
//         { label: "Villa", icon: <MdOutlineHolidayVillage /> },
//         { label: "Independent Home", icon: <IndependentHomeIcon /> }
// ];
const labels:string[] = ["Apartment","Villa","Independent Home"]

    return (
        <>
            <div>
                <div className={hidden ? "hidden" : ""}>
                    <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={true} />
                </div>
                <div className={css.Book_heading_content}>
                <p className={css.heading}>Basic Information</p>
                <p className={css.step}> Step 1 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Selectbutton labels={labels}/>
                </div>
            </div>
        </>
    )
}
export default Bookfreedesign;