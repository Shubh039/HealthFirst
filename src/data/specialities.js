export const specialities = [
  {
    slug: "internal-medicine",
    title: "Internal Medicine",
    image: "/images/specialities/internal-medicine.jpg",
    description:
      "Our Internal Medicine department focuses on the diagnosis, treatment and long-term management of adult illnesses. From routine health concerns to complex chronic conditions like diabetes, hypertension and thyroid disorders, our physicians provide thorough evaluation and personalised care plans for every patient.",
  },
  {
    slug: "obs-gynae",
    title: "Obstetrics & Gynaecology",
    image: "/images/specialities/obs-gynae.jpg",
    description:
      "We offer complete women's health care across every life stage — from prenatal care and safe childbirth to the diagnosis and treatment of gynaecological conditions. Our team combines clinical expertise with a compassionate, patient-first approach to pregnancy and women's wellness.",
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    image: "/images/specialities/orthopedics.jpg",
    description:
      "Our Orthopedics department treats conditions affecting bones, joints, ligaments and muscles. Services range from sports injury management and fracture care to advanced joint replacement surgery, helping patients regain mobility and return to daily life.",
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    image: "/images/specialities/pediatrics.jpg",
    description:
      "Dedicated to the health of infants, children and adolescents, our Pediatrics team provides preventive care, vaccinations and treatment for childhood illnesses in a comforting, child-friendly environment focused on healthy growth and development.",
  },
  {
    slug: "neonatology",
    title: "Neonatology",
    image: "/images/specialities/neonatology.jpg",
    description:
      "Our Neonatology unit provides specialised care for newborns, including premature and critically ill infants. Backed by a Level 3 NICU and an experienced neonatal team, we ensure every newborn receives close monitoring and advanced medical support from their first moments of life.",
  },
  {
    slug: "general-surgery",
    title: "General Surgery",
    image: "/images/specialities/general-surgery.jpg",
    description:
      "Our General Surgery department performs a wide range of surgical procedures, using modern and minimally invasive techniques wherever possible to ensure faster recovery, reduced discomfort and better outcomes for our patients.",
  },
  {
    slug: "anesthesia-critical-care",
    title: "Anesthesia & Critical Care",
    image: "/images/specialities/anesthesia-critical-care.jpg",
    description:
      "Our Anesthesia & Critical Care team provides 24×7 emergency and ICU support, backed by advanced life support systems and round-the-clock monitoring. From surgical anesthesia to critical patient stabilisation, our specialists are equipped to respond swiftly to medical emergencies.",
  },
  {
    slug: "gastroenterology",
    title: "Gastroenterology",
    image: "/images/specialities/gastroenterology.jpg",
    description:
      "Our Gastroenterology department diagnoses and treats conditions affecting the digestive system, including the stomach, liver, intestines and pancreas. We offer routine screenings as well as management of complex digestive disorders.",
  },
  {
    slug: "nephrology",
    title: "Nephrology",
    image: "/images/specialities/nephrology.jpg",
    description:
      "Our Nephrology team offers comprehensive kidney care, including the diagnosis and management of chronic kidney disease, hypertension-related kidney issues and dialysis support, helping patients maintain kidney health at every stage.",
  },
  {
    slug: "urology",
    title: "Urology",
    image: "/images/specialities/urology.jpg",
    description:
      "Our Urology department treats conditions related to the urinary tract and male reproductive system across all age groups, combining advanced diagnostics with effective, patient-centred treatment plans.",
  },
  {
    slug: "radiology",
    title: "Radiology",
    image: "/images/specialities/radiology.jpg",
    description:
      "Our Radiology department provides advanced diagnostic imaging services, including X-ray and ultrasound, supporting accurate and timely diagnosis across every department in the hospital.",
  },
  {
    slug: "ivf-infertility",
    title: "IVF & Infertility",
    image: "/images/specialities/ivf-infertility.jpg",
    description:
      "Our IVF & Infertility specialists provide compassionate fertility care and assisted reproduction support, guiding couples through every step of their journey towards building a family.",
  },
];

export function getSpecialityBySlug(slug) {
  return specialities.find((item) => item.slug === slug);
}