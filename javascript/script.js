import { cv } from '../data/cv.js';

const path = 'img/';

function main() {
    const informations = [cv];
    let content = `
        <div class="container-profile">
            <section class="profile-image">
                <img src="${path}${informations[0].profile.photo.split('/').pop()}" alt="${informations[0].profile.lastName}" class="picture" />
            </section>

            <section class="profile-contacts">
                <span class="profile-titles">Contact</span>
                <div class="contact-content">
                    <div><i class="fas fa-phone"></i><span class="phone">${informations[0].profile.phone}</span></div>
                    <div><i class="fas fa-envelope"></i><span class="email">${informations[0].profile.email}</span></div>
                    <div><i class="fas fa-map-marker-alt"></i><span class="address">${informations[0].profile.address}</span></div>
                    <div><i class="fab fa-linkedin"></i><span class="linkedin">${informations[0].profile.links[0].linkedin}</span></div>
                    <div><i class="fab fa-github"></i><span class="github">${informations[0].profile.links[0].github}</span></div>
                </div>
            </section>

            <section class="profile-skills">
                <span class="profile-titles">Soft skills</span>
                <div class="skills-content">
                    ${informations[0].softSkills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                </div>
            </section>

            <section class="profile-loisirs">
                <span class="profile-titles">Loisirs</span>
                <div class="loisirs-content">
                    ${informations[0].interests.map(interest => `<span class="loisirs">${interest}</span>`).join('')}
                </div>
            </section>

            <section class="profile-langues">
                <span class="profile-titles">Langues</span>
                <div class="langues-content">
                    ${informations[0].languages.map(lang => `<span class="langue">${lang.language} : ${lang.level}</span>`).join('')}
                </div>
            </section>
        </div>

        <div class="container-parcours">
            <div class="parcours-description">
                <div class="description-profile">
                    <span class="profile-name">${informations[0].profile.firstName} ${informations[0].profile.lastName}</span>
                    <span class="profile-title">Étudiant en Master Qualité du Logiciel</span>
                </div>
                <div class="description-content">
                    <span class="description">${informations[0].profile.professionalSummary}</span>
                </div>
            </div>

            <div class="parcours-experience">
                <section class="experience-academiques">
                    <span class="section-title">Parcours Académiques</span>
                    <div class="academiques-content">
                        ${informations[0].education.map(edu => `
                            <div>
                                <span class="academique-title">${edu.diploma}</span>
                                <div class="academique-details">
                                    <span class="academique-school">${edu.organisation}</span>
                                    <span class="academique-year">${edu.year}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
               
         

                <section class="experience-stages">
                    <span class="section-title">Stages</span>
                    <div class="stages-content">
                        ${informations[0].experiences
                            .filter(exp => exp.type === "Stage")
                            .map(exp => `
                                <div class="stage-item">
                                    <span class="item-title">${exp.title}</span>
                            <span class="item-attached">${exp.description}</span>
                            <div class="item-details">
                                <span class="item-company">${exp.organisation}</span>
                                <span class="item-year">${exp.duration}</span>
                            </div>
                                </div>
                            `).join('')}
                    </div>

                    <span class="section-title">Projets</span>
                    <div class="projets-content">
                        ${informations[0].experiences
                            .filter(exp => exp.type === "Projet")
                            .map(exp => `
                                <div class="projet-item">
                                    <span class="projet-titles">${exp.title}</span>
                                    <span class="projet-technologies">${exp.technologies} </span>
                                </div>
                            `).join('')}
                    </div>
                </section>

                <section class="experience-competencesTechnologies">
                    <span class="section-title">Compétences technologiques</span>
                    <div class="competencesTechnologies-content">
                        ${informations[0].technologySkills.map(skill => `
                        <div class="competencesTechnologies-category">
                            <span class="competencesTechnologies-category-title">${skill.skill}</span>
                            <div class="competencesTechnologies-list">
                                <span class="competencesTechnologies">${skill.details.join(', ')}</span>
                            </div>
                        </div>
                        `).join('')
                            }
                    </div>
                </section>

                

                <section class="experience-professionnelle">
                    <span class="section-title">Experiences Professionnelle</span>
                    <div class="professionnelle-content">
                             ${informations[0].professionalExperiences.map(exppro => `
                       <div class="professionnelle-item">
                            <span class="item-title">${exppro.title}</span>
                            <span class="item-place">${exppro.organisation}</span>   
                       </div>
                       `).join('')}
                </section
            </div>
        </div>
    `;

    document.getElementById('cv-container').innerHTML = content;
}

main();


