import FreebieCard from "../components/FreebieCard";


export default function Projects(){
    return(
        <div className="Freebies">
            <div className="Freebies-Hero">
                <h2>PROjects!</h2>
            </div>
            <FreebieCard ImgSrc={"assets/images/projects/spacepic mockup.png"} TagName={"react"}/>
            <FreebieCard ImgSrc={"assets/images/projects/Space-pic1 mockup.png"} TagName={"js"}/>
        </div>
    )
}