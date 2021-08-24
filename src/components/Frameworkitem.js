import './Framework.css';

function Frameworkitem(props) {
    const {frame,onframeClick} = props;
    return(
        <div className="Framework-item">
        <img src={frame.thumbnailUrl} inClick={() => {onframeClick(frame)}} />
        <h4>{frame.title}</h4>
    </div>
    );
}

export default Frameworkitem;