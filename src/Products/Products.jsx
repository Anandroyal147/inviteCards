import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import { RecentCollections } from "../Home/home";

export  default function Products(){
    return(
        <>
        <Footer/>
        <Header/>
        <BannerCom/>
        <RecentCollections/>
        <Footer2/>
        </>
    )
}