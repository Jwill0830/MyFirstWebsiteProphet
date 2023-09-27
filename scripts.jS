const API_URL = "http://localhost:3000";

// CREATE: Add a new article
function createArticle(article) {
    return fetch(`${API_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    }).then(response => response.json());
}

// READ: Get all articles
function getAllArticles() {
    return fetch(`${API_URL}/articles`).then(response => response.json());
}

// READ: Get a single article by ID
function getArticleById(id) {
    return fetch(`${API_URL}/articles/${id}`).then(response => response.json());
}

// UPDATE: Update an article by ID
function updateArticle(id, updatedArticle) {
    return fetch(`${API_URL}/articles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedArticle)
    }).then(response => response.json());
}

// DELETE: Delete an article by ID
function deleteArticle(id) {
    return fetch(`${API_URL}/articles/${id}`, {
        method: 'DELETE'
    }).then(response => response.json());
}
// CREATE: Add a new submission
function createSubmission(submission) {
    return fetch(`${API_URL}/submissions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submission)
    }).then(response => response.json());
}

// READ: Get all submissions
function getAllSubmissions() {
    return fetch(`${API_URL}/submissions`).then(response => response.json());
}

// READ: Get a single submission by ID
function getSubmissionById(id) {
    return fetch(`${API_URL}/submissions/${id}`).then(response => response.json());
}

// UPDATE: Update a submission by ID
function updateSubmission(id, updatedSubmission) {
    return fetch(`${API_URL}/submissions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSubmission)
    }).then(response => response.json());
}

// DELETE: Delete a submission by ID
function deleteSubmission(id) {
    return fetch(`${API_URL}/submissions/${id}`, {
        method: 'DELETE'
    }).then(response => response.json());
}
