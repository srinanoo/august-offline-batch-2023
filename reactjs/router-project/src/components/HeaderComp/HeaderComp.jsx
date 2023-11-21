// import "./Header.css";
import headerClass from './Header.module.css';

export default function HeaderComponent() {
    return (
        <>
            {/* <h2 className="title">Header Component</h2> */}
            <h2 className={headerClass.title}>Header Component</h2>
        </>
    )
}