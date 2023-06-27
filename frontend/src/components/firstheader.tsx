import {
    Image,
    Menu,
} from "semantic-ui-react";
import Logo from '../Logo.png'

const fixedMenuStyle = {
    backgroundColor: "white",
    height: "87px",
    display: "flex",
    flexDirection: "row",
};

function Firstpart() {
    return (
        <div>
            <Menu borderless className={"MenuHeader"} style={fixedMenuStyle}>
                <div className={"sixteen wide column right"}>
                    <Menu.Item style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "99vw" }} content={""}>
                        <Image className={"LogoImg"} src={Logo} />
                        <a
                            style={{ float: "right" }}
                            className="github-button"
                            href="https://github.com/Prakar-Gupta"
                            target="blank"
                            data-size="large"
                            aria-label="Follow Prakhar-Gupta on GitHub"
                        >
                            Follow
                        </a>
                    </Menu.Item>

                </div>
            </Menu>
        </div>
    );
}

export default Firstpart;