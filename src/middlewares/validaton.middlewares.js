const { body, validationResult } =require("express-validator");

exports.validateRegistration = [
    body('email')
        .isEmail()
        .withMessage('Invalid email format'),

    body('password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
        )
        .withMessage(
            "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol"
        ),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        
        next();
    }

];
