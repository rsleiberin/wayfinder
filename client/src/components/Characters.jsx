function Characters() {
    return (
        <>
            <Routes>
                <Route path='/' element={<CharacterList characterObj='' />}/>
                <Route path=':id/*' element ={<Character />}/>
            </Routes>
        </>
    )
}