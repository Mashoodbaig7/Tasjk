const signupcon = (req, res) => {
    let { name, email, password, age } = req.body

    const emailPattern = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

    if(!name || !email || password || age){
        return res.status(401).json({serverMsg:"All Feilds Compalsary"})
    }

    if(name.length < 4){
        return res.status(401).json({serverMsg:"Name must be 4 character "})
    }
    if (age < 18) {
        return res.status(401).json({serverMsg:"Age is less than 18"})
    }
    if (password.length < 6) {
        return res.status(401).json({serverMsg:"Password must be 6 Character"})

    }
    if (!emailPattern.test(email)) {
        return res.status(401).json({serverMsg:"Invalid email"})

    }

    res.status(201).json({serverMsg:"Server Created"})
}

module.exports = signupcon