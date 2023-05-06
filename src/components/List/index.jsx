const List = ({ arr, callback }) => {
	return <>{arr.map(callback)}</>
}

export default List
