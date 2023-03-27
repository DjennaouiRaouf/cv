import React from "react";
class ButtonScroll extends React.Component{

    scrollToTop()
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    render() {
        return(
            <button className="btn btn-primary pulse-grow-on-hover" type="button" style={{"fontSize": "20px",
                "borderRadius": "20px",
                "position": "fixed",
                "bottom": "20px",
                "right": "30px",
                "zIndex": "99"}}><i
                className="fas fa-arrow-up" onClick={()=>this.scrollToTop()}></i></button>
        )
    }
}
export default ButtonScroll;