import GiphyApi from "./GiphyApi"
function Project({ title, description, giphyId, projectLink }) {

    return (
        <div>
            <h2 style={{ marginBottom: "40px", marginTop: "150px" }}>{title}</h2>
            <p>{description}</p>
            <a style={{ width: "inherit", display: "inline-block" }} href={projectLink} target="_blank">

                <GiphyApi giphyId={giphyId} />
            </a>
        </div>
    )
}

export default Project