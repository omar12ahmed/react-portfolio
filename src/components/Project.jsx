import GiphyApi from "./GiphyApi"
function Project({ title, description, giphyId, projectLink, repo}) {

    return (
        <div>
            <h2 style={{ marginBottom: "40px", marginTop: "150px" }}>{title}</h2>
            <p>{description}</p>
            <a style={{ width: "inherit", display: "inline-block" }} href={projectLink} target="_blank">
                <GiphyApi giphyId={giphyId} />
            </a>
            <p style={{marginTop:"60px"}}> <b> To view the repository, <a href={repo} target="_blank">click here</a>, or explore the live project by clicking on the gif above.</b></p>
        </div>
    )
}
export default Project