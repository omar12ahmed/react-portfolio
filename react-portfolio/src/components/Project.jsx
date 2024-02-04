import GiphyApi from "./GiphyApi"
function Project({ title, description, giphyId, projectLink }) {

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={projectLink} target="_blank">

                <GiphyApi giphyId={giphyId} />
            </a>
        </div>
    )
}

export default Project