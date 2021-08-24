function FrameworkPost(props) {
    const {frame,onBgclick} = props
    return (
        <div className="framework-post">
            <div className="framework-post-bg" onClick={onBgclick}/>
            <div className="framework-post-content">
                <img src={frame.fullUrl} />
                <h4>{frame.title}</h4>
            </div>
        </div>
    );
}

export default FrameworkPost;