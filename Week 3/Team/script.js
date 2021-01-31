// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function filter() {
    let inventors_list = "";
    for (let i = 0; i < inventors.length; i++) {
        if (inventors[i].year >= 1500 && inventors[i].year <= 1599) {
            inventors_list += inventors[i].first + " " + inventors[i].last + ", ";
        }
    }
    let edited_inventors_list = inventors_list.slice(0, -2); //removes empty space and final comma from string
    document.getElementById("step1").innerHTML = edited_inventors_list;
}

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
function display_result() {
    document.getElementById("step2").innerHTML =  inventors.map(combine_names);
}

function combine_names(inventors) {
    var first_last_name = [inventors.first,inventors.last].join(" ");
    return first_last_name;
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

function sort_inventors() {
    inventors.sort(function(a, b){return b.year - a.year});
    for (let i = 0; i <= inventors.length; i++) {
        document.getElementById("step3").innerHTML += inventors[i].first;
        if (i != inventors.length - 1) {
            document.getElementById("step3").innerHTML += ', ';
        }
    }
}
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
function display_reduce() {
    document.getElementById("step4").innerHTML =  inventors.reduce(reduce_inventors, 0) + " years";
}

function reduce_inventors(total, inventors) {
    return total + (inventors.passed - inventors.year);
}

// 5. Sort the inventors by years lived
function sort_years_lived() {
    inventors.sort(function(a, b){return (b.passed - b.year) - (a.passed - a.year)});
    for (let i = 0; i <= inventors.length; i++) {
        document.getElementById("step5").innerHTML += inventors[i].first;
        if (i != inventors.length - 1) {
            document.getElementById("step5").innerHTML += ', ';
        }
    }
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// 7. sort Exercise
// Sort the people alphabetically by last name
function sort_last() {
    inventors.sort(function(a, b) {
        let last_nameA = a.last.toUpperCase();
        let last_nameB = b.last.toUpperCase();

        if (last_nameA < last_nameB) {
            return -1;
          }
          if (last_nameA > last_nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
    });
    for (let i = 0; i <= inventors.length; i++) {
        document.getElementById("stretch1").innerHTML += inventors[i].first + ' ' + inventors[i].last;
        if (i != inventors.length - 1) {
            document.getElementById("stretch1").innerHTML += ', ';
        }
    }
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
];