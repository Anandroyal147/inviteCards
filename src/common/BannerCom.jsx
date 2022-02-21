import { useLocation } from 'react-router-dom'

export default function BannerCom() {
       const location = useLocation();
      var pathname= location.pathname
     var newPath=pathname.replace('/','').toLocaleUpperCase()
    // console.log(location.pathname);

    return (
        <>
            <section class="page-title">

                <div class="thm-container">

                    <h3></h3>

                </div>


            </section>
            <div class="breadcumb-wrapper">
                <div class="thm-container">
                    <ul class="breadcumb">
                        <li><a href={'/'}>Homepage</a></li>
                        <li><span class="sep">-</span></li>
                        <li><a href={pathname}>{newPath}</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}