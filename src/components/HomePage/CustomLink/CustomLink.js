import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "#50D8AF" : "#000000" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;
