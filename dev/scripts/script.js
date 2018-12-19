// App variables 
const apiURL = 'https://api.reliefweb.int/v1/reports?appname=apidoc';
const app = {};
const searchGroupKey = [];
const searchCountryKey = [];
let resultsData = [];
let finalResults = [];

// Charity variables
const charities = [
    {
        country: `Vanuatu`,
        text: `Direct Relief, Save the Children, CARE, World Health Organization, NYC Medics, Medical Santo, Samaritan's Purse`
    },

    {
        country: `Tonga`,
        text: `Direct Relief, World Health Organization, Humanitarian Coalition, UNICEF, Caritas`
    },

    {
        country: `Philippines`,
        text: `Doctors Without Borders, Direct Relief, International Red Cross, Adra Canada, Save the Children, CARE, Americares, Relief International, World Health Organization, World Vision, ShelterBox, Humanitarian Coalition, GlobalMedic, NYC Medics, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Guatemala`,
        text: `Mennonite Central Committee, International Red Cross, Oxfam, Save the Chidren, CARE, Americares, GlobalGiving, World Health Organization, World Vision, Global Medic, UNICEF, Habitat for Humanity`
    },

    {
        country: `Bangladesh`,
        text: `British Red Cross, Mennonite Central Committee, Direct Relief, International Red Cross, AMURT Global Network, Adra Canada, Save the Children, CARE, Americares, Relief International, World Vision, Humanitarian Coation, UNICEF, Habitat for Humanity, Caritas, Save the Children`
    },

    {
        country: `Solomon Islands`,
        text: `Direct Relief, World Health Organization, Caritas`
    },

    {
        country: `Brunei`,
        text: `International Red Cross, World Health Organization`
    },

    {
        country: `Costa Rica`,
        text: `International Red Cross, World Health Organization, Caritas`
    },

    {
        country: `Cambodia`,
        text: `British Red Cross, Doctors Without Borders, Mennonite Central Committee, Direct Relief, International Red Cross, World Health Organization, Oxfam, Adra Canada, CARE, Americares, World Vision, Medical Teams International, Global Medic, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Papua New Guinea`,
        text: `Doctors Without Borders, Direct Relief, International Red Cross, CARE, World Health Organization, Humanitarian Coaltion, UNICEF, Caritas`
    },

    {
        country: `El Salvador`,
        text: `Mennonite Central Committee, Direct Relief, International Red Cross, Oxfam, Americares, World Health Organization, World Vision, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Timor-Leste`,
        text: `British Red Cross, International Red Cross, Oxfam, CARE, World Vision, UNICEF`
    },

    {
        country: `Mauritius`,
        text: `International Red Cross, World Health Organization, Caritas`
    },

    {
        country: `Nicaragua`,
        text: `Mennonite Central Committee, Direct Relief, International Red Cross, Oxfam, Save the Children, CARE, Americares, World Health Organization, World Vision, UNICEF, Caritas, Habitat for Humanity, Save the Children`
    },

    {
        country: `Guinea-Bissau`,
        text: `Direct Relief, Save the Children, CARE, World Health Organization, NYC Medics, Medical Santo, Samaritan's Purse`
    },

    {
        country: `Fiji`,
        text: `International Red Cross, Save the Children, CARE, World Health Organization, UNICEF, Habitat for Humanity`
    },

    {
        country: `Japan`,
        text: `Direct Relief, International Red Cross, Save the Children, Americares, World Health Organization, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Vietnam`,
        text: `Mennonite Central Committee, Direct Relief, International Red Cross, Oxfam, CARE, Americares, World Health Organization, World Vision, Humanitarian Coalition, Caritas, Habitat for Humanity, Save the Children`
    },

    {
        country: `Gambia`,
        text: `Direct Relief, Save the Children, World Health Organization, UNICEF, Caritas`
    },

    {
        country: `Jamaica`,
        text: `Direct Relief, International Red Cross, World Health Organization, UNICEF, Habitat for Humanity`
    },

    {
        country: `Haiti`,
        text: `Doctors Without Borders, International Red Cross, AMURT Global Network, Oxfam, Save the Children, CARE, Americares, World Health Organization, Mission Aviation Fellowship, World Vision, Medical Teams International, Humanitarian Coalition, NYC Medics, Unicef, Caritas, Habitat for Humanity, Save the Children`
    },

    {
        country: `Chile`,
        text: `Direct Relief, International Red Cross, Americares, World Health Organization, World Vision, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Benin`,
        text: `CARE, World Health Organization, Humanitarian Coalition, UNICEF, Caritas`
    },

    {
        country: `Guyana`,
        text: `Direct Relief, World Health Organization, UNICEF`
    },

    {
        country: `Niger`,
        text: `British Red Cross, Doctors Without Borders, International Red Cross, Save the Children, CARE, Americares, International Relief Teams, Relief International, World Health Organization, World Vision, ShelterBox, Humanitarian Coalition, UNICEF Caritas`
    },

    {
        country: `Madagascar`,
        text: `British Red Cross, Direct Relief, International Red Cross, CARE, World Health Organization, Humanitarian Coalition, UNICEF, Caritas`
    },

    {
        country: `Dominican Republic`,
        text: `All Hands and Hearts, Oxfam, Save the Children, Americares, World Vision, UNICEF, Caritas`
    },

    {
        country: `Cameroon`,
        text: `British Red Cross, Doctors Without Borders, Direct Relief, CARE, World Health Organization, ShelterBox, Humanitarian Coalition, UNICEF`
    },

    {
        country: `Chad`,
        text: `British Red Cross, Doctors Without Borders, Mennonite Central Committee, Direct Relief, International Red Cross, CARE, Americares, World Health Organization, World Vision, ShelterBox, Caritas`
    },

    {
        country: `Honduras`,
        text: `Mennonite Central Committee, Direct Relief, International Red Cross, International Relief Teams, Save the Children, CARE, Americares, World Health Organization, World Vision, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Cape Verde`,
        text: `International Red Cross, SOS Children's Villages International, World Health Organization`
    },

    {
        country: `Senegal`,
        text: `Direct Relief, International Red Cross, Relief International, World Health Organization, UNICEF`
    },

    {
        country: `Togo`,
        text: `CARE, World Health Organization, UNICEF`
    },

    {
        country: `Djbouti`,
        text: `Direct Relief, International Red Cross, World Health Organization, UNICEF`
    },

    {
        country: `Burundi`,
        text: `Mennonite Central Committee, Direct Relief, International Red Cross, Oxfam, Adra Canada, Save the Children, CARE, World Health Organization, World Vision, UNICEF, Caritas`
    },

    {
        country: `Indonesia`,
        text: `Direct Relief, International Red Cross, All Hands and Hearts, Oxfam, Save the Children, World Health Organization, CARE, Americares, Mission Aviation Fellowship, World Vision, ShelterBox, Humanitarian Coalition, UNICEF, Caritas, Habitat for Humanity`
    },

    {
        country: `Sierra Leone`,
        text: `British Red Cross, Doctors Without Borders, Direct Relief, Save the Children, CARE, Americares, World Vision, Humanitarian Coalition, UNICEF Caritas`
    }
]


// Method to initialize events 
app.events = function (){

    $(".countriesButton").on('click', function (event) {
        // Prevent default
        event.preventDefault();

        $('.countryTable').show();
        $('.vulnerableGroupTable').hide();
    });

    $(".vulnerableGroupButton").on('click', function (event) {

        // Prevent default
        event.preventDefault();

        $('.vulnerableGroupTable').show();
        $('.countryTable').hide();
    });

    $(".countryNames").on("click", function () {
        const countryNameInput = $(this).val();
        if ($(this).is(':checked')) {
            searchCountryKey.push(countryNameInput);

        // Allow user to remove country from array 
        } else {
            const removeCountryName = searchCountryKey.indexOf(countryNameInput);
            return searchCountryKey.splice(removeCountryName, 1);
        }
    });

    // Save vulnerable groups the user clicks to an array
    $('.vulnerableGroupNames').on('change', function () {
        const vulnerableGroupInput = $(this).val();
        if ($(this).is(':checked')) {
            searchGroupKey.push(vulnerableGroupInput);
            // Allow user to remove groups from array
        } else {
            const removeVulnerableGroup = searchGroupKey.indexOf(vulnerableGroupInput);
            return searchGroupKey.splice(removeVulnerableGroup, 1);
        };
    });

    // Listen for when submit button is clicked to get user results
    $(".submitSearch").on("click", async function (e) {
        // Prevent default of submit button
        e.preventDefault();

        // Hide Search Section and show Results Section
        $('.searchSection').hide();
        $('.resultsSection').show();

        // Make ajax request to get data, based on user queries and save that to a variable
        const countryData = await app.getDisasterInfoCountries(searchCountryKey);
       
        // Once data is recieved back, continue with grabbing results
        $.when(
            countryData[0]
            // Take the results of ajax request and manipulate it
        ).then(function (country) {
            const resultsData = (country.data);

            // Iterate through each result to save results into a more accessible array
            for (let i = 0; i < resultsData.length; i++) {
                // Create object in the array that will hold all the properties for that disaster
                var disasterName = resultsData[i].fields.disaster[0].name;
                // Put disaster name into object
                finalResults.push({ disasterName });
                // Put disaster category into the object
                finalResults[i].disasterType = resultsData[i].fields.disaster[0].type[0].name;
                // Put disaster type into the object
                finalResults[i].date = (resultsData[i].fields.date.original).substring(0, 10);
                // Put all the countries into an array in the object
                finalResults[i].country = resultsData[i].fields.primary_country.name;
                // Get id for searching later
                finalResults[i].id = resultsData[i].id;
                // Put all the vulnerable groups into an array in the object
                let vulnerableGroups = []
                for (let x = 0; x < resultsData[i].fields.vulnerable_groups.length; x++) {
                    vulnerableGroups.push(resultsData[i].fields.vulnerable_groups[x].name);
                };
                finalResults[i].vulnerableGroups = vulnerableGroups;
            };

            // Create function that will remove duplicate disasters from Array
            function removeDuplicates(originalArray, prop) {
                var finalResults = [];
                var lookupObject = {};
                for (var i in originalArray) {
                    lookupObject[originalArray[i][prop]] = originalArray[i];
                }
                for (i in lookupObject) {
                    finalResults.push(lookupObject[i]);
                }
                return finalResults;
            }

            // Call function to filter results
            let filteredFinalResults = removeDuplicates(finalResults, "disasterName");

            // Variables to append info to page
            $('.resultsSection').show();

            filteredFinalResults.forEach((eachResult) => {
                $('.resultsList').append(`
                    <li class="resultListItem">
                        <h5 class="titleHeading"><span class="highlight">Title</span>: <span class="disasterName">${eachResult.disasterName}</span></h5>
                        <h6 class="disasterHeading"><span class="highlight">Disaster Category</span>: ${eachResult.disasterType}</h6>
                        <h6 class="dateHeading"><span class="highlight">Date</span>: ${eachResult.date}</h6>
                        <h6 class="vulnerableGroupHeading"><span class="highlight">Vulnerable Group(s)</span>: ${eachResult.vulnerableGroups}</h6>
                        <button class="readMore">Read More</button>
                        <ul class="${eachResult.id} id">${eachResult.id}</ul>
                    </li>`);

                // Using "charities" array, create a function that connects country name with charities and append results to page
                charities.forEach((charity) => {

                    if (charity.country === eachResult.country) {
                        $('.resultsList').append(`<p class="charities">Organizations for <span class="highlight">${charity.country}</span>: ${charity.text}</p>`);
                    }
                });
            });

            $(".readMore").on("click", async function (e) {
                e.preventDefault();
                const disasterSearchName = (`${$(this).closest(".resultListItem").find("h5").find(".disasterName").text()}`);
                const disasterId = (`${$(this).closest(".resultListItem").find(".id").text()}`);
                const getArticles = await app.getArticles(`${disasterSearchName}`);
                $.when(
                    getArticles
                ).then(
                    function (article) {
                        articles.title = article.data[0].fields.title;
                        articles.body = article.data[0].fields["body-html"];
                        articles.link = article.data[0].fields.origin;
                        article.data.forEach((eachArticle) => {
                           
                            $(`.${disasterId}`).append(`
                                <li>
                                    <h4 class="articleTitle">${eachArticle.fields.title}</h4>
                                    <p class="articleField">${eachArticle.fields["body-html"].substring(0, 260)}...</p>
                                    <a href="${eachArticle.fields.origin}" class="articleLink">See Article</a>
                                </li>`
                            );
                         })
                    })
                })
             })
        })
}
// end of app.events funcion

// Method to GET disaster info by Country
app.getDisasterInfoCountries = (...query) => {
    query = query.map((item) => {
        return $.ajax({
            url: apiURL,
            method: 'GET',
            dataType: 'json',
            data: {

                "filter": {
                    operator: 'AND',
                    conditions: [
                        {
                            "field": "primary_country.name",
                            "value": item,
                        },
                        {
                            "field": 'vulnerable_groups.id',
                            "value": searchGroupKey,
                            "operator": "OR"
                        },
                        {
                            "field": "disaster.name"
                        },
                        {
                            "field": "disaster.type.name"
                        }
                    ],

                },

                "fields": {
                    "include": [
                        "disaster.name",
                        "disaster.type.name",
                        "date.original",
                        "primary_country.name",
                        "vulnerable_groups.name",
                        "disaster.id"
                    ]
                },

                "language": {
                    "id": 267,
                    "name": "English",
                    "code": "en"
                },

                "limit": 10,
                "preset": "latest",

                "query": {
                    "value": 'analysis latest'
                }
            }
        })
    })
    return $.when(query);
}

// Method to get Articles by the disaster name
app.getArticles = (disaster) => {
    articles = $.ajax({
        url: apiURL,
        method: 'GET',
        dataType: 'json',
        data: {

            "filter": {
                operator: 'AND',
                conditions: [
                    {
                        "field": "disaster.name",
                        "value": disaster,
                    },
                    {
                        "field": 'vulnerable_groups.id',
                        "value": searchGroupKey,
                        "operator": "OR"
                    },
                ],

            },

            "fields": {
                "include": [
                    "headline.title",
                    "body-html",
                    "origin"
                ]
            },

            "language": {
                "id": 267,
                "name": "English",
                "code": "en"
            },

            "limit": 5,
            "preset": "latest",

            "query": {
                "value": 'analysis latest'
            }
        }
    })
    return $.when(articles);
}

// (function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
//     1: [function (require, module, exports) {
//         "use strict";

//     }, {}]
// }, {}, [1])

// Init function to initialize app 
app.init = function () {

    // Initially hide "Vulnerable Groups" checkboxes until user clicks on Vulnerable Groups button
    $('.vulnerableGroupTable').hide();

    // Also hide "Results Section" until user inputs and submits search
    $('.resultsSection').hide();

    // Reset checkboxes everytime user refreshes page
    $('form')[0].reset();

    app.events();
}

// DOC READY
$(function () {
    // Call init function
    app.init();
})
