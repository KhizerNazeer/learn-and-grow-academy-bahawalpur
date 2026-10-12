/* =========================================================
   LEARN & GROW ACADEMY
   DAY 9 — JAVASCRIPT FUNCTIONALITY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       1. MOBILE NAVIGATION
    ===================================================== */

    const navbarToggler =
        document.querySelector(".navbar-toggler");

    const navbarCollapse =
        document.querySelector(".navbar-collapse");


    if (navbarToggler && navbarCollapse) {

        const navLinks =
            navbarCollapse.querySelectorAll(".nav-link");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (
                    navbarCollapse.classList.contains("show")
                ) {

                    navbarToggler.click();

                }

            });

        });





            /* =========================================
       DAY 11 — WHATSAPP ENQUIRY
    ========================================== */

    const whatsappButton = document.getElementById(
        "whatsappEnquiryButton"
    );

    if (whatsappButton) {

        whatsappButton.addEventListener("click", function (event) {

            event.preventDefault();

            const studentName =
                document.getElementById("studentName")?.value.trim() || "";

            const parentName =
                document.getElementById("parentName")?.value.trim() || "";

            const studentClass =
                document.getElementById("studentClass")?.value || "";

            const subject =
                document.getElementById("subject")?.value || "";

            const phoneNumber =
                document.getElementById("phoneNumber")?.value.trim() || "";

            const learningMode =
                document.getElementById("learningMode")?.value || "";

            const message =
                document.getElementById("message")?.value.trim() || "";

            const whatsappMessage =
`Assalam-o-Alaikum Learn & Grow Academy,

I would like to enquire about classes.

Student Name: ${studentName}
Parent Name: ${parentName}
Class/Level: ${studentClass}
Subject: ${subject}
Phone: ${phoneNumber}
Preferred Learning Mode: ${learningMode}

Message:
${message}

I would like to know more about the available classes and free demo session.`;

            const encodedMessage =
                encodeURIComponent(whatsappMessage);

            const whatsappURL =
                `https://wa.me/923029076648?text=${encodedMessage}`;

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );
        });
    }

    }

    


    /* =====================================================
       2. SMOOTH SCROLLING
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const navbar =
                    document.querySelector(".navbar");


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight -
                    10;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });



    /* =====================================================
       3. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    function handleNavbarScroll() {

        if (!navbar) {

            return;

        }


        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleNavbarScroll
    );


    handleNavbarScroll();



    /* =====================================================
       4. ANIMATED STATISTICS COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter");


    let countersStarted = false;


    function animateCounters() {

        if (countersStarted || counters.length === 0) {

            return;

        }


        const statsSection =
            document.querySelector(".stats-section");


        if (!statsSection) {

            return;

        }


        const sectionPosition =
            statsSection.getBoundingClientRect();


        if (
            sectionPosition.top <
            window.innerHeight * 0.85
        ) {

            countersStarted = true;


            counters.forEach(function (counter) {

                const target =
                    parseInt(
                        counter.getAttribute("data-target"),
                        10
                    );


                let current = 0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(target / 60)
                    );


                const timer =
                    setInterval(function () {

                        current += increment;


                        if (current >= target) {

                            current = target;

                            clearInterval(timer);

                        }


                        counter.textContent =
                            current;

                    }, 25);

            });

        }

    }


    window.addEventListener(
        "scroll",
        animateCounters
    );


    animateCounters();



    /* =====================================================
       5. CONTACT FORM VALIDATION
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {


        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                let formIsValid = true;


                /* -----------------------------------------
                   STUDENT NAME
                ----------------------------------------- */

                const studentName =
                    document.getElementById("studentName");


                if (
                    !studentName ||
                    studentName.value.trim() === ""
                ) {

                    showInvalid(studentName);

                    formIsValid = false;

                } else {

                    showValid(studentName);

                }



                /* -----------------------------------------
                   PARENT NAME
                ----------------------------------------- */

                const parentName =
                    document.getElementById("parentName");


                if (
                    !parentName ||
                    parentName.value.trim() === ""
                ) {

                    showInvalid(parentName);

                    formIsValid = false;

                } else {

                    showValid(parentName);

                }



                /* -----------------------------------------
                   CLASS
                ----------------------------------------- */

                const studentClass =
                    document.getElementById("studentClass");


                if (
                    !studentClass ||
                    studentClass.value === ""
                ) {

                    showInvalid(studentClass);

                    formIsValid = false;

                } else {

                    showValid(studentClass);

                }



                /* -----------------------------------------
                   SUBJECT
                ----------------------------------------- */

                const subject =
                    document.getElementById("subject");


                if (
                    !subject ||
                    subject.value === ""
                ) {

                    showInvalid(subject);

                    formIsValid = false;

                } else {

                    showValid(subject);

                }



                /* -----------------------------------------
                   PHONE
                ----------------------------------------- */

                const phoneNumber =
                    document.getElementById("phoneNumber");


                const phonePattern =
                    /^(\+92|0)?3[0-9]{9}$/;


                if (
                    !phoneNumber ||
                    !phonePattern.test(
                        phoneNumber.value
                            .replace(/[\s-]/g, "")
                    )
                ) {

                    showInvalid(phoneNumber);

                    formIsValid = false;

                } else {

                    showValid(phoneNumber);

                }



                /* -----------------------------------------
                   LEARNING MODE
                ----------------------------------------- */

                const learningMode =
                    document.getElementById("learningMode");


                if (
                    !learningMode ||
                    learningMode.value === ""
                ) {

                    showInvalid(learningMode);

                    formIsValid = false;

                } else {

                    showValid(learningMode);

                }



                /* -----------------------------------------
                   SUCCESS
                ----------------------------------------- */

                if (formIsValid) {

                    showFormSuccess();

                } else {

                    const firstInvalid =
                        contactForm.querySelector(
                            ".is-invalid"
                        );


                    if (firstInvalid) {

                        firstInvalid.focus();

                    }

                }

            }
        );



        /* =================================================
           LIVE VALIDATION
        ================================================= */

        const formFields =
            contactForm.querySelectorAll(
                "input, select, textarea"
            );


        formFields.forEach(function (field) {

            field.addEventListener(
                "blur",
                function () {

                    validateSingleField(field);

                }
            );


            field.addEventListener(
                "input",
                function () {

                    if (
                        field.classList.contains(
                            "is-invalid"
                        )
                    ) {

                        validateSingleField(field);

                    }

                }
            );


            field.addEventListener(
                "change",
                function () {

                    validateSingleField(field);

                }
            );

        });

    }



    /* =====================================================
       6. BACK TO TOP BUTTON
    ===================================================== */

    createBackToTopButton();


});



/* =========================================================
   FORM VALIDATION FUNCTIONS
========================================================= */


function validateSingleField(field) {

    if (!field) {

        return false;

    }


    const fieldId =
        field.id;


    let valid = true;



    switch (fieldId) {


        case "studentName":

            valid =
                field.value.trim().length >= 2;

            break;



        case "parentName":

            valid =
                field.value.trim().length >= 2;

            break;



        case "studentClass":

            valid =
                field.value !== "";

            break;



        case "subject":

            valid =
                field.value !== "";

            break;



        case "phoneNumber": {

            const phonePattern =
                /^(\+92|0)?3[0-9]{9}$/;


            const cleanedPhone =
                field.value
                    .replace(/[\s-]/g, "");


            valid =
                phonePattern.test(
                    cleanedPhone
                );

            break;

        }



        case "learningMode":

            valid =
                field.value !== "";

            break;



        default:

            return true;

    }


    if (valid) {

        showValid(field);

    } else {

        showInvalid(field);

    }


    return valid;

}



function showInvalid(field) {

    if (!field) {

        return;

    }


    field.classList.add("is-invalid");

    field.classList.remove("is-valid");

}



function showValid(field) {

    if (!field) {

        return;

    }


    field.classList.remove("is-invalid");

    field.classList.add("is-valid");

}



/* =========================================================
   FORM SUCCESS MESSAGE
========================================================= */

function showFormSuccess() {

    const contactForm =
        document.getElementById("contactForm");


    if (!contactForm) {

        return;

    }


    let successMessage =
        document.getElementById(
            "formSuccessMessage"
        );


    if (!successMessage) {

        successMessage =
            document.createElement("div");


        successMessage.id =
            "formSuccessMessage";


        successMessage.className =
            "form-success-message";


        successMessage.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            <div>
                <strong>Enquiry Ready!</strong>
                <span>
                    Your information has passed the
                    required checks. The form can now
                    be connected to email, WhatsApp or
                    a database.
                </span>
            </div>
        `;


        contactForm.parentNode.insertBefore(
            successMessage,
            contactForm
        );

    }


    successMessage.classList.add("show");


    successMessage.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    setTimeout(function () {

        successMessage.classList.remove("show");

    }, 6000);

}



/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

function createBackToTopButton() {

    const button =
        document.createElement("button");


    button.type = "button";

    button.className =
        "back-to-top";

    button.setAttribute(
        "aria-label",
        "Back to top"
    );


    button.innerHTML =
        '<i class="bi bi-arrow-up"></i>';


    document.body.appendChild(button);



    function toggleBackToTop() {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        toggleBackToTop
    );


    toggleBackToTop();



    button.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}
