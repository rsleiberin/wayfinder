function Games() {

    return(
        <>
            <SideNavigation router="games" />
            <Routes>
                <Route path='/' element={<GameList />}/>
                <Route path=':id' element={<Game />}/>
            </Routes>
        </>
    )
}