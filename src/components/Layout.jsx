import Sidebar from "./Sidebar"

const Layout = (props) => {
    return (
        <>
            <div className="grid grid-cols-8">
                <Sidebar />
                { props.children }
            </div>
        </>
    )
}

export default Layout