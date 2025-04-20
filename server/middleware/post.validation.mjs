function validatePosts(req, res, next) {
    const body = req.body || {};
    const { title, image, category_id, description, content, status_id } = body;

    const requiredFields = {
        title: 'string',
        image: 'string',
        category_id: 'number',
        description: 'string',
        content: 'string',
        status_id: 'number'
    };

    const missingFields = Object.keys(requiredFields).filter(field => body[field] === undefined || body[field] === '');
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `${missingFields.join(', ')} fields are required` });
    }

    const invalidTypes = Object.keys(requiredFields).filter(field => typeof body[field] !== requiredFields[field]);
    if (invalidTypes.length > 0) {
        const typeErrors = invalidTypes.map(field => `${field} must be ${requiredFields[field]}`);
        return res.status(400).json({ error: typeErrors.join(', ') });
    }

    next();
}

export default validatePosts;
