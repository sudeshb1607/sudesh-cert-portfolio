export type Badge = {
  title: string;
  issuer: string;
  category: "Adobe" | "AI/ML/Cloud" | "Microsoft" | "SAFe - Agile" |"Foundational" | "Other";
  level: "Master" | "Expert" | "Associate" | "Professional" | "Fundamental";
  issued: string;
  expiry?: string;
  skills?: string[];
  image: string;
};

export const badges: Badge[] = [

 // =========================
  // MASTER
  // =========================
  {
    title: "Generative AI Leader Certification",
    issuer: "Google Cloud",
    category: "AI/ML/Cloud",
    level: "Master",
    issued: "Mar 2026",
    expiry: "Mar 2029",
    skills: ["Google Cloud Platform", "Generative AI", "AI Ethics", "AI Implementation Planning"],
    image: "https://images.credly.com/size/340x340/images/ec23e41a-0f32-4a98-9c00-28925621b281/blob",
  },  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "GAmazon Web Service",
    category: "AI/ML/Cloud",
    level: "Professional",
    issued: "Jul 2022",
    expiry: "Jul 2028",
    skills: ["AWS", "Cloud Computing", "Cloud Services", "Cloud Platform"],
    image: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
   // =========================
  // MASTER
  // =========================
  {
    title: "Certified AI-Empowered SAFe® Product Owner/Product Manager",
    issuer: "SAFe by Scaled Agile",
    category: "SAFe - Agile",
    level: "Master",
    issued: "Jan 2026",
    expiry: "Jan 2027",
    skills: ["Product Management", "Product Ownership", "SAFe Principles", "Agile Methodology"],
    image: "https://images.credly.com/images/8f543e84-c89a-447b-86e6-ae581ff8da4b/blob",
  },


  // =========================
  // MASTER
  // =========================
  {
    title: "AEM Sites Architect",
    issuer: "Adobe",
    category: "Adobe",
    level: "Master",
    issued: "Apr 2020",
    expiry: "Jul 2027",
    skills: ["AEM", "Architecture", "Multi-site", "Cloud Service"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2F00c8045e-3e3f-4148-9d9b-22bfc05b8e14?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041648&Signature=X3UKlL8R5WSgpjPWNc9mkEBwNki9G57pJeyu9GoDTFDqRGxbNEDa2CZETtHJ6%2BLI3KKw9Vt0FgmExQT60Uh9svsyoDkLEeh%2FPOzSn7x7VVk%2B535JYdlJRJhnouLFw4O6r4y6jW%2FxAfW5uVXk9VrUzylu5lcQ0CcG%2BiBQRjW9Ig1YfW9xaD7St1PYYoWXTDFJLnOSjmSbbFe1RSYU0SU2O8m603DkwuhrQ0RaePrf6hQds99NLfnwxH1gviRDDL8kVsAAwZZGQQ9E1clH06OXy%2F6M9zEaQsY9HGdE%2FJx4wqmFEH1vGXVk3LKIFXXMpP1Ycla2aev2frBrveavo5eUXQ%3D%3D",
  },
  {
    title: "AEM Subject Matter Expert (Cloud Migration)",
    issuer: "Adobe",
    category: "Adobe",
    level: "Master",
    issued: "Mar 2023",
    skills: ["Architecture", "Migration Strategy"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2F00c8045e-3e3f-4148-9d9b-22bfc05b8e14?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041648&Signature=X3UKlL8R5WSgpjPWNc9mkEBwNki9G57pJeyu9GoDTFDqRGxbNEDa2CZETtHJ6%2BLI3KKw9Vt0FgmExQT60Uh9svsyoDkLEeh%2FPOzSn7x7VVk%2B535JYdlJRJhnouLFw4O6r4y6jW%2FxAfW5uVXk9VrUzylu5lcQ0CcG%2BiBQRjW9Ig1YfW9xaD7St1PYYoWXTDFJLnOSjmSbbFe1RSYU0SU2O8m603DkwuhrQ0RaePrf6hQds99NLfnwxH1gviRDDL8kVsAAwZZGQQ9E1clH06OXy%2F6M9zEaQsY9HGdE%2FJx4wqmFEH1vGXVk3LKIFXXMpP1Ycla2aev2frBrveavo5eUXQ%3D%3D",
  },

  // =========================
  // EXPERT
  // =========================
  {
    title: "AEM Sites Developer",
    issuer: "Adobe",
    category: "Adobe",
    level: "Expert",
    issued: "Mar 2019",
    expiry: "Jul 2027",
    skills: ["Sling", "OSGi", "Components", "Backend"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2F37932d37-e8c9-40f0-9503-95d9f7d6625e?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041511&Signature=OhNy5pvB1kH4i18C5Ivi7OhgB%2FU85IW9jgeG4FShyY6t3XteufZ1%2F%2FAwXD8d8uK58VzTojCi%2FOiv7IqJ8euiTxsfLQQf52h4CjGIYMbADLtoUISBPRWAxiu0EZaGVgv9btbuAwvZV0wQ8E%2FqipWiJJaZwJTDlscIhq%2FCvEiqMhqW66gPu5ae7bnBZtsuvHd2ZNr1yH1l%2B7eeJ%2FVYdFjB00ObbWFpDLs1Evc4zEPjuasZp0vdkntbgCUV4FicTKEccLwAvmeC2zjncA%2FTt5Bx%2Fbq2yWhB%2FAGTD4rI5BWY4x0IhBSsF2bpzm%2FbFY4sMokNcUdKz6vdTkA8sRLOIBI93w%3D%3D",
  },
  {
    title: "AEM Sites Business Practitioner",
    issuer: "Adobe",
    category: "Adobe",
    level: "Expert",
    issued: "May 2020",
    expiry: "Jul 2027",
    skills: ["Content Strategy", "Authoring", "CMS"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2F37932d37-e8c9-40f0-9503-95d9f7d6625e?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041511&Signature=OhNy5pvB1kH4i18C5Ivi7OhgB%2FU85IW9jgeG4FShyY6t3XteufZ1%2F%2FAwXD8d8uK58VzTojCi%2FOiv7IqJ8euiTxsfLQQf52h4CjGIYMbADLtoUISBPRWAxiu0EZaGVgv9btbuAwvZV0wQ8E%2FqipWiJJaZwJTDlscIhq%2FCvEiqMhqW66gPu5ae7bnBZtsuvHd2ZNr1yH1l%2B7eeJ%2FVYdFjB00ObbWFpDLs1Evc4zEPjuasZp0vdkntbgCUV4FicTKEccLwAvmeC2zjncA%2FTt5Bx%2Fbq2yWhB%2FAGTD4rI5BWY4x0IhBSsF2bpzm%2FbFY4sMokNcUdKz6vdTkA8sRLOIBI93w%3D%3D",
  },
  {
    title: "AEM as a Cloud Service Migration Expert",
    issuer: "Adobe",
    category: "Adobe",
    level: "Expert",
    issued: "Mar 2023",
    expiry: "Jul 2027",
    skills: ["Migration", "Cloud", "AEMaaCS"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2F37932d37-e8c9-40f0-9503-95d9f7d6625e?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041511&Signature=OhNy5pvB1kH4i18C5Ivi7OhgB%2FU85IW9jgeG4FShyY6t3XteufZ1%2F%2FAwXD8d8uK58VzTojCi%2FOiv7IqJ8euiTxsfLQQf52h4CjGIYMbADLtoUISBPRWAxiu0EZaGVgv9btbuAwvZV0wQ8E%2FqipWiJJaZwJTDlscIhq%2FCvEiqMhqW66gPu5ae7bnBZtsuvHd2ZNr1yH1l%2B7eeJ%2FVYdFjB00ObbWFpDLs1Evc4zEPjuasZp0vdkntbgCUV4FicTKEccLwAvmeC2zjncA%2FTt5Bx%2Fbq2yWhB%2FAGTD4rI5BWY4x0IhBSsF2bpzm%2FbFY4sMokNcUdKz6vdTkA8sRLOIBI93w%3D%3D",
  },

  // =========================
  // PROFESSIONAL
  // =========================
  {
    title: "Adobe Firefly Services Qualified Credential (Beta)",
    issuer: "Adobe",
    category: "AI/ML/Cloud",
    level: "Professional",
    issued: "May 2025",
    expiry: "May 2027",
    skills: ["Generative AI", "Firefly", "Content Generation"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "AEM Edge Delivery Services Developer",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Oct 2025",
    expiry: "Oct 2027",
    skills: ["Edge Delivery", "Performance", "Headless"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "Adobe Journey Optimizer Certification",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Jul 2025",
    expiry: "Jul 2027",
    skills: ["Customer Journeys", "Personalization"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "Adobe Marketo Engage Certification",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Jul 2025",
    expiry: "Jul 2027",
    skills: ["Marketing Automation", "Leads"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "Adobe Workfront Certification",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Jul 2025",
    expiry: "Jul 2027",
    skills: ["Workflow", "Project Management"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "Adobe Workfront Fusion Developer",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Jan 2022",
    expiry: "Jul 2027",
    skills: ["Automation", "Integration"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "Adobe Real-Time CDP Business Practitioner",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Jun 2022",
    expiry: "Jun 2026",
    skills: ["CDP", "Segmentation", "Data"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  },
  {
    title: "Adobe Experience Platform Qualified",
    issuer: "Adobe",
    category: "Adobe",
    level: "Professional",
    issued: "Apr 2020",
    skills: ["AEP", "Data Platform"],
    image: "https://storage.googleapis.com/prod-adobe-secure/credential%2Fffc4d509-bec9-475d-984a-c2cae5d51686?GoogleAccessId=133892163607-compute@developer.gserviceaccount.com&Expires=1774041677&Signature=cFQZQCQOJ6b0FGmjL0B%2Fozk7sceQshPhY5DLnbpCuNt1YR96Zh9H77mjHS4PoKryXbDd6CLMEYtyTCcxDF18FsfRK5lCtxbUG8XOGZbgy3BbXPx5I2euWu8pawVo2bORpo4QCJXlMyAIr8qqimXKmN3oWupfD6vRzksRly2V5S1QK8nJMg06o5h5NvbqZYHQXxRdqs%2Bgv%2BqwYo4CkmP3fg%2FagzkOWvF1k2m0%2FYNTjQZ4TT7t1hECU45rddFbxi3T8U7UZxqrMK2D0F6Noi4EXk99EY4EvJfyenYnKxcUCdTPVqU4T%2B6xAUu7k6npwHa6%2BSaW9tF%2BfWkanrcK8H9C3Q%3D%3D",
  }
];