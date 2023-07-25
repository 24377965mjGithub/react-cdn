function Home() {

    const { useState, useEffect } = React;

    let [person, setPerson] = useState();
    let id = 1;

    function logout() {
        axios.post('/logout').then(() => {
            window.location.href = domain;
        }).catch(() => {
            console.log('error');
        })
    }

    function seePerson(){
        axios.get(domain + "/getuser").then((res) => {
            // console.log(res.data)
            setPerson(res.data);
            console.log(person)
        })
    }

    useEffect(() => {
        seePerson();
    }, [])

    // seePerson();

    return (
        <div>
            {/* <input type="text" placeholder="Enter anything..." value={person} onChange={(e) => setPerson(e.target.value)} />
            <button>See</button> */}
            <p>Main content goes here...</p>
            <button onClick={logout}>Logout</button>
            <a href={domain + "/view/"+ id}>Go Somewhere</a>

            <>
                {
                    person ?
                        person.map(per =>  {
                            return (
                                <div key={per.id}>
                                    <p>{per.name}</p>
                                    <a href={domain + '/see/' + per.id}>
                                        <button>View</button>
                                    </a>
                                </div>
                            )
                        }) : <p>Please Wait...</p>
                }
            </>
        </div>
    );
}

//render the component to the DOM
ReactDOM.render(<Home />, document.getElementById('home'));