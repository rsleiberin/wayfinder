function Users() {
    return(
        <>
        <Routes>
            <Route path='/:id' element={<Dashboard />}/>
            <Route path='characters/*' element={<Characters />}/>
        </Routes>
        </>
    )
}

export default Users