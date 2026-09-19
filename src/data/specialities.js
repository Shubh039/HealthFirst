export const specialities = [
  {
    slug: "internal-medicine",
    title: "Internal Medicine",
    image: "/images/specialities/internal-medicine.png",
    description:
      "Our Internal Medicine department provides comprehensive medical care for adults, focusing on the diagnosis, treatment and long-term management of a wide range of health conditions. From common illnesses and infections to chronic conditions such as diabetes, hypertension, thyroid disorders and other complex medical concerns, our physicians take a thorough approach to understanding each patient's overall health. Through careful evaluation, appropriate investigations and personalised treatment plans, our team aims to provide continuous medical support while helping patients manage their health effectively over time.",
  },

  {
    slug: "obs-gynae",
    title: "Obstetrics & Gynaecology",
    image: "/images/specialities/obstetrics-gynae.png",
    description:
      "Our Obstetrics & Gynaecology department provides comprehensive women's healthcare across different stages of life, from adolescence and reproductive health to pregnancy and later stages of women's wellness. Our services include routine gynaecological consultations, reproductive health care, prenatal care, pregnancy monitoring and support throughout childbirth. With a focus on clinical expertise, careful monitoring and compassionate communication, our team works closely with women and families to provide personalised care based on their individual healthcare needs.",
  },

  {
    slug: "orthopedics",
    title: "Orthopedics",
    image: "/images/specialities/orthopedics.png",
    description:
      "Our Orthopedics department focuses on the prevention, diagnosis and treatment of conditions affecting bones, joints, muscles, ligaments and other parts of the musculoskeletal system. Our team provides evaluation and treatment for fractures, sports injuries, joint problems, mobility-related concerns and other orthopedic conditions. Depending on the condition, patients may receive conservative treatment, rehabilitation guidance or surgical evaluation when required. Our approach is centred on reducing discomfort, improving mobility and helping patients return to their everyday activities with appropriate medical support.",
  },

  {
    slug: "pediatrics",
    title: "Pediatrics",
    image: "/images/specialities/pediatrics.png",
    description:
      "Our Pediatrics department provides dedicated healthcare for infants, children and adolescents, with care focused on healthy growth, development and overall wellbeing. From routine health check-ups, vaccinations and nutritional guidance to the diagnosis and treatment of common childhood illnesses, our pediatric team provides age-appropriate medical care at every stage of childhood. We understand that children require a different approach to healthcare, which is why our team aims to create a comfortable and reassuring environment while keeping parents and families informed throughout the care process.",
  },

  {
    slug: "neonatology",
    title: "Neonatology",
    image: "/images/specialities/neonatology.png",
    description:
      "Our Neonatology department provides specialised medical care for newborn babies, particularly premature, low-birth-weight and critically ill infants who require close observation and additional medical support. With a dedicated neonatal team and Level 3 NICU support, newborns can receive continuous monitoring and appropriate medical attention during the important early days of life. Our approach focuses on careful observation, timely intervention, supportive care and close coordination with parents and other specialists whenever required.",
  },

  {
    slug: "general-surgery",
    title: "General Surgery",
    image: "/images/specialities/general-surgery.png",
    description:
      "Our General Surgery department provides surgical evaluation and treatment for a wide range of conditions affecting different parts of the body. Patients are assessed carefully to determine the most appropriate treatment approach based on their individual condition and medical history. Depending on the procedure and clinical requirement, our surgical team may use conventional or minimally invasive techniques. From pre-operative assessment and surgical care to post-operative monitoring and recovery guidance, our team works to provide coordinated care throughout the surgical journey.",
  },

  {
    slug: "anesthesia-critical-care",
    title: "Anesthesia & Critical Care",
    image: "/images/specialities/anesthesia.png",
    description:
      "Our Anesthesia & Critical Care department provides specialised support for patients requiring surgical anesthesia, intensive monitoring and critical medical care. The anesthesia team works closely with surgeons and other specialists to assess patients before procedures, provide appropriate anesthesia management during surgery and monitor their condition throughout the perioperative period. The department also supports patients requiring close observation, emergency stabilisation and intensive care, with continuous monitoring and coordinated medical management for patients with serious or complex conditions.",
  },

  {
    slug: "gastroenterology",
    title: "Gastroenterology",
    image: "/images/specialities/gastroenterology.png",
    description:
      "Our Gastroenterology department focuses on the diagnosis and management of conditions affecting the digestive system, including the stomach, intestines, liver, gallbladder and pancreas. Our team provides evaluation and ongoing care for a wide range of digestive concerns, from common symptoms such as abdominal discomfort, acidity and digestive disturbances to more complex and chronic gastrointestinal conditions. Through appropriate clinical assessment and diagnostic evaluation, our specialists develop treatment and management plans tailored to each patient's condition and healthcare needs.",
  },

  {
    slug: "nephrology",
    title: "Nephrology",
    image: "/images/specialities/nephrology.png",
    description:
      "Our Nephrology department specialises in the diagnosis and management of kidney-related conditions and diseases. Our team provides medical care for conditions such as chronic kidney disease, kidney-related complications of hypertension and other disorders that can affect kidney function. Patients receive appropriate evaluation, monitoring and guidance based on the stage and nature of their condition. For patients requiring dialysis care, our team also provides medical guidance and ongoing support as part of their overall kidney care journey.",
  },

  {
    slug: "urology",
    title: "Urology",
    image: "/images/specialities/urology.png",
    description:
      "Our Urology department provides diagnosis and treatment for conditions affecting the urinary system and male reproductive system. Our specialists evaluate a range of concerns involving the kidneys, bladder, urinary tract and other parts of the urological system. From common urinary problems and kidney or bladder conditions to other urological disorders, patients receive appropriate diagnostic evaluation and personalised treatment plans. Our approach focuses on understanding the underlying condition and providing clear guidance on the most appropriate course of care.",
  },

  {
    slug: "radiology",
    title: "Radiology",
    image: "/images/specialities/radiology.png",
    description:
      "Our Radiology department provides diagnostic imaging services that assist doctors across the hospital in evaluating and understanding a wide range of medical conditions. Imaging services such as X-ray and ultrasound help healthcare teams assess internal structures, identify abnormalities and support clinical decision-making. Our radiology team works alongside other departments to provide timely imaging and reporting, helping doctors with diagnosis, treatment planning and ongoing monitoring of patients when required.",
  },

  {
    slug: "ivf-infertility",
    title: "IVF & Infertility",
    image: "/images/specialities/ivf-infertility.png",
    description:
      "Our IVF & Infertility department provides evaluation and fertility care for individuals and couples experiencing difficulties with conception. Our specialists focus on understanding the different factors that may affect fertility and provide appropriate evaluation before discussing suitable treatment options. Depending on the individual situation, patients may be guided through fertility treatments and assisted reproduction options, with personalised medical support throughout the process. Our team aims to provide clear guidance, compassionate care and continued support throughout the fertility journey.",
  },

  {
    slug: "emergency-care",
    title: "Emergency Care",
    image: "/images/specialities/critical-care.png",
    description:
      "Our Emergency Care department provides 24×7 medical support for patients who require immediate assessment and attention for sudden illness, injury or other urgent medical conditions. Our emergency team focuses on rapid clinical assessment, initial stabilisation and timely medical intervention while continuously monitoring the patient's condition. When specialist or critical care is required, patients can be coordinated with the appropriate medical departments for further evaluation and treatment. With round-the-clock emergency support and access to critical care services, our team is prepared to provide prompt and coordinated care when patients need it most.",
  },
];

export function getSpecialityBySlug(slug) {
  return specialities.find((item) => item.slug === slug);
}