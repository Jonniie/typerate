const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5173";

// POST /register — No auth
export const register = async ({ username, email, password } = {}) => {
    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// POST /login — No auth
export const login = async ({ email, password } = {}) => {
    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// POST /confirm — No auth
export const confirmPassword = async ({ email, password } = {}) => {
    try {
        const res = await fetch(`${API_URL}/confirm`, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// GET /logout — No auth
export const logout = async () => {
    try {
        const res = await fetch(`${API_URL}/logout`, {
            method: "GET",
            credentials: "include",
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// GET /user — Auth required
export const getUser = async () => {
    try {
        const res = await fetch(`${API_URL}/user`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// GET /user/get/:userId — No auth
export const getAUser = async (id) => {
    try {
        const res = await fetch(`${API_URL}/user/get/${id}`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// POST /user/search — No auth
export const searchUsers = async (q) => {
    function convertStringToRegExp(str) {
        const escapedStr = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return escapedStr;
    }

    try {
        const res = await fetch(`${API_URL}/user/search`, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: convertStringToRegExp(q) }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// PATCH /user — Auth required (save game)
export const updateStats = async (wpm, cpm, accuracy, timestamp, missed = [], combinations = []) => {
    try {
        const res = await fetch(`${API_URL}/user`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ wpm, cpm, accuracy, timestamp, missed, combinations }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// DELETE /user/stats — Auth required
export const resetStats = async () => {
    try {
        const res = await fetch(`${API_URL}/user/stats`, {
            method: "DELETE",
            credentials: "include",
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// DELETE /user — Auth required
export const deleteAccount = async () => {
    try {
        const res = await fetch(`${API_URL}/user`, {
            method: "DELETE",
            credentials: "include",
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// PATCH /user/profilepicture — Auth required
export const updateProfilePicture = async (value = null) => {
    if (!value) return;
    try {
        const res = await fetch(`${API_URL}/user/profilepicture`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ profilePicture: value }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// PATCH /user/profilepicture/reset — Auth required
export const resetProfilePicture = async () => {
    try {
        const res = await fetch(`${API_URL}/user/profilepicture/reset`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                Accept: "application/json",
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// PATCH /user/badges — Auth required
export const updateBadges = async (badges) => {
    if (!badges) return;
    try {
        const res = await fetch(`${API_URL}/user/badges`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ badges: [...badges] }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// PATCH /user/settings — Auth required (save only changed fields)
export const updateSettings = async (payload) => {
    if (!payload) return;
    try {
        const res = await fetch(`${API_URL}/user/settings`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// POST /edit/username — Auth required
export const editUsername = async (username) => {
    try {
        const res = await fetch(`${API_URL}/edit/username`, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// POST /edit/email — Auth required
export const editEmail = async (email) => {
    try {
        const res = await fetch(`${API_URL}/edit/email`, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
