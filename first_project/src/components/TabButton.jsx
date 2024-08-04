export default function TabButton({children,onSelect,isselected}){
    return(
        <li><button className={isselected ?"active":undefined} onClick={onSelect}>{children}</button></li>
    )
}