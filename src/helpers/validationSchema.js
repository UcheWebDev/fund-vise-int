import * as yup from "yup";

const authValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions').default(false),

});

const updateDetailsValidationSchema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
});

const loginValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const postValidationSchema = yup.object({
    post: yup.string().required(),
});

const acceptTermsValidationSchema = yup.object({
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions').default(false),
});

const aboutCompanyValidation = yup.object({
    company_name: yup.string().required(),
    stage: yup.string().required(),
    industry: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    short_summary_company: yup.string().required(),
    company_website_url: yup.string().url().required(),
    file: yup.mixed()
        .required()
        .test("fileSize", "File size too large", (value) => {
            return value && value.size <= 1000000; // 1 MB
        })
        .test("fileType", "Invalid file type", (value) => {
            return value && ["image/jpeg", "image/png"].includes(value.type);
        }),

});

const investmentCampaignValidation = yup.object({
    investmet_round: yup.string().required(),
    max_target: yup.number().required(),
    equity_offer_max: yup.number().required(),
    min_target: yup.number().required(),
    equity_offer_min: yup.number().required(),
    use_of_funds_max: yup.string().required(),
    use_of_funds_min: yup.string().required(),
})

const businessCampaignValidation = yup.object({
    business_oppurtunity: yup.string().required(),
    market_potentials: yup.string().required(),
    exit_strategy: yup.string().required(),
    notable_achievments: yup.string().required(),
    number_of_users: yup.string().required(),
    total_revenue: yup.number().required(),
    total_profit: yup.number().required()
})



export {
    authValidationSchema,
    updateDetailsValidationSchema,
    loginValidationSchema,
    postValidationSchema,
    acceptTermsValidationSchema,
    aboutCompanyValidation,
    investmentCampaignValidation
}

