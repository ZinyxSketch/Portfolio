import Tag from "./Tag";

export default function FreebieCard({ImgSrc, TagName}){
    return(
        <section className="Freebie-Card">
           
            <div>
                <h1>Space pic</h1>
                <h2>Frontend project</h2>
                <a href="https://astro-space-pic.netlify.app/">Astro-space-pic</a>
                <p>To see the astro pic of today and the past </p>
                <Tag TagName={TagName}/>
            </div>
            <img src={ImgSrc} alt="" />
        </section>
    )
}
