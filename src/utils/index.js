import axios from "axios";

export const industries = [
    "Software as a Service (SaaS)",
    "E-commerce",
    "Mobile Apps",
    "FinTech (Financial Technology)",
    "HealthTech (Healthcare Technology)",
    "EdTech (Educational Technology)",
    "FoodTech (Food Technology)",
    "TravelTech (Travel Technology)",
    "AgriTech (Agriculture Technology)",
    "Real EstateTech (Real Estate Technology)",
    "Gaming",
    "Social Networking",
    "Artificial Intelligence (AI)",
    "Internet of Things (IoT)",
    "Wearable Technology",
    "Virtual Reality (VR) / Augmented Reality (AR)",
    "CleanTech (Clean Technology)",
    "LegalTech (Legal Technology)",
    "HR Tech (Human Resources Technology)",
    "InsurTech (Insurance Technology)"
]

export const stages = [
    "Ideation",
    "Prototype",
    "Minimum Viable Product (MVP)",
    "Beta Launch",
    "Customer Feedback",
    "Iterative Development",
    "Market Validation",
    "Product Market Fit",
    "Scaling",
    "Growth"
]

export const investmentRounds = [
    "Pre-Seed Round",
    "Seed Round",
    "Product Development Round",
    "Prototype Round",
    "Early Customer Traction Round",
    "Series A Round",
    "Bridge Round"
]

export const startupTeamRoles = [
    'Founder/CEO',
    'CTO (Chief Technology Officer)',
    'Developer',
    'COO (Chief Operating Officer)',
    'CMO (Chief Marketing Officer)',
    'CFO (Chief Financial Officer)',
    'Head of Sales',
    'Product Manager',
    'Head of Human Resources',
    'Head of Customer Support',
    'Data Scientist/Analyst',
    'Legal Counsel',
    'Head of Design'
]

export const campaignPayLoadkeys = [
    "entrepreneur_id",
    "company_name",
    "stage",
    "industry",
    "country",
    "city",
    "short_summary_company",
    "company_website_url",
    "company_img_url",
    "investment_round",
    "max_target",
    "equity_offer_max",
    "min_target",
    "equity_offer_min",
    "use_of_funds_max",
    "use_of_funds_min",
    "business_opportunity",
    "market_potentials",
    "exit_strategy",
    "notable_achievements",
    "number_of_users",
    "total_revenue",
    "total_profit",
    "team_members"
]

export const fundPayloadKeys = [
    "investor_id",
    "name_of_fund",
    "location",
    "type_of_fund",
    "city",
    "about_fund",
    "fund_img_url",
    "total_fund_value",
    "fund_per_business",
    "no_business_fund",
    "average_percentage",
    "youtube_url",
    "extra_criteria"
];

export const startupFundTypes = [
    "Bootstrapping",
    "Seed Funding",
    "Angel Investment",
    "Venture Capital (VC) Funding",
    "Series A Funding",
    "Series B Funding",
    "Series C Funding",
    "Debt Financing",
    "Crowdfunding",
    "Accelerator and Incubator Programs",
    "Corporate Venture Capital (CVC)"
];


export const getCountries = async () => {
    try {
        const countriesApiUrl = "https://countriesnow.space/api/v0.1/countries";
        const res = await axios.get(countriesApiUrl);
        const resList = res.data.data
        const country = resList.map((country) => country.country);
        return country;

    } catch (err) {
        return err.response.status;
    }
}

export const fetchCities = async (country) => {
    try {
        const citiesApiUrl = "https://countriesnow.space/api/v0.1/countries/cities";
        const response = await axios.post(citiesApiUrl, {
            country: country,
        });
        const cities = response.data.data
        return cities
    } catch (err) {
        return err.response.status;
    }
}

export class formDataHandler {
    constructor() {
        this.formData = new FormData();
    }

    setDataHandlerKeys(payLoadkeys) {
        payLoadkeys.forEach(key => {
            this.formData.append(key, null);
        });
    }

    addCampaignPayloadData(formValues, userId, teamMembersArray) {
        this.formData.append('enterpreneur_id', userId)
        this.formData.append('company_name', formValues.name)
        this.formData.append('stage', formValues.stage)
        this.formData.append('industry', formValues.industry)
        this.formData.append('country', formValues.country)
        this.formData.append('city', formValues.city)
        this.formData.append('short_summary_company', formValues.about_company)
        this.formData.append('company_website_url', formValues.website)
        this.formData.append('company_img_url', formValues.file)

        this.formData.append('investmet_round', formValues.round)
        this.formData.append('max_target', formValues.max_target)
        this.formData.append('equity_offer_max', formValues.equity_offer_max)
        this.formData.append('min_target', formValues.min_target)
        this.formData.append('equity_offer_min', formValues.equity_offer_min)
        this.formData.append('use_of_funds_max', formValues.use_of_funds_max)
        this.formData.append('use_of_funds_min', formValues.use_of_funds_min)

        this.formData.append('business_oppurtunity', formValues.business_oppurtunity)
        this.formData.append('market_potentials', formValues.market_potentials)
        this.formData.append('exit_strategy', formValues.exit_strategy)
        this.formData.append('notable_achievments', formValues.notable_achievments)
        this.formData.append('number_of_users', formValues.number_of_users)
        this.formData.append('total_revenue', formValues.total_revenue)
        this.formData.append('total_profit', formValues.total_profit);

        this.formData.append('team_members', JSON.stringify(teamMembersArray));
    }

    addFundsPayloadData(formValues, userId) {
        this.formData.append('investor_id', userId)
        this.formData.append('name_of_fund', formValues.name)
        this.formData.append('location', formValues.country)
        this.formData.append('type_of_fund', formValues.fund_type)

        this.formData.append('city', formValues.city)
        this.formData.append('about_fund', formValues.about_fund)
        this.formData.append('fund_img_url', formValues.file)

        this.formData.append('total_fund_value', formValues.fund_value)
        this.formData.append('fund_per_business', formValues.fund_per_business)
        this.formData.append('no_business_fund', formValues.no_of_business)
        this.formData.append('average_percentage', formValues.average_percentage)
        this.formData.append('youtube_url', formValues.youtube)
        this.formData.append('extra_criteria', formValues.extra_criteria)
    }

    clearData() {
        this.formData = new FormData();
    }
    getPayload() {
        return this.formData;
    }
}