const brand = [
"Better Homes &amp; Gardens",
"Country Gardens",
"Diabetic Living","Do It Yourself",
"EatingWell", "Entertainment Weekly",
"Family Circle",
"Food &amp; Wine",
"Fortune", "Health",
"InStyle", "Living the Country Life",
"Martha Stewart Living",
"Midwest Living",
"Money", "Parents",
"Parents Latina",
"People","Rachael Ray Every Day",
"Real Simple", "Shape", "Southern Living",
"Sports Illustrated",
"Sports Illustrated Kids",
"Successful Farming",
"The Magnolia Journal",
"Time", "Traditional Home",
"Travel + Leisure",
"Wood Magazine",
]

const qaNames = [
    "Unassigned",
    "Rajesh","Lavanya","Reynold","Manish","Savitha","Clarissa","Angela",
]
const devNames = [
    "Unassigned","Hope","Jason","Todd","John","Josh","Nicole","Sam","Shawn",
    "Alayne","Robert","Krishna","Mayank","Topher","Sundar"
]

const articles = [
    {"page":18, "title":"LETTER FROM THE EDITOR",  "url":"https://apple.news/AWp4obfafQsuHd8YA_shl6w",},
{"page":25, "title":"A STUDY IN CONTRASTS",  "url":"https://apple.news/AwThy1Hc_Trumkv8vpLirtA",},
{"page":28, "title":"GLORY DAYS ARE HERE AGAIN",  "url":"https://apple.news/Aweo4Z_P4TtqaQv5Im4Av9g",},
{"page":29, "title":"NEXT-GEN HOTEL SWAG",  "url":"https://apple.news/AukEqcN6jSe2usJlctfAZew",},
{"page":30, "title":"ART, DESIGN AND HOSPITALITY COLLIDE IN ROME",  "url":"https://apple.news/AOYjOi0klS32SZlbYLFWvoA",},
{"page":32, "title":"SAVORING SALVADOR",  "url":"https://apple.news/AXxS4xEv-RzGs6XtClHm2Cg",},
{"page":35, "title":"AN OCEAN APART",  "url":"https://apple.news/AyBrmkU2gRwOvkQnAhv4_hA",},
{"page":38, "title":"THE JOY OF JAFFA",  "url":"https://apple.news/AngTBmnjISlm2AziY4jbGDg",},
{"page":42, "title":"ON THE SLOW ROAD IN WEST MICHIGAN",  "url":"https://apple.news/Ak5xqqpQ8RNOxNzXgSeaUqA",},
{"page":50, "title":"WELLNESS, TUSCAN STYLE",  "url":"https://apple.news/AG9lCFNCATTi7pYGgv4CtXA",},
{"page":54, "title":"FOUR NEW WAYS TO FALL IN LOVE WITH LISBON",  "url":"https://apple.news/ANQ9Fi61zQgWDhpHTku92Hg",},
{"page":62, "title":"THE MOST PEACEFUL PLACE IN TOWN",  "url":"https://apple.news/AYU1Hm6UESI2AdzaT5EUOcQ",},
{"page":69, "title":"WORLD‚ÄôS BEST AWARDS 2019 OPENER",  "url":"https://apple.news/ABQGbIR7uSKuOYpW8cIF1eQ",},
{"page":70, "title":"CITIES",  "url":"https://apple.news/APOBxzoSKTy6_k3Zlr0fo-Q",},
{"page":78, "title":"ISLANDS",  "url":"https://apple.news/AHtQUeryUS_WBTGA5wsDsHQ",},
{"page":84, "title":"TRANSPORTATION",  "url":"https://apple.news/ARDKXJRZNSSuewvpnhntQsg",},
{"page":96, "title":"DESTINATION SPAS",  "url":"https://apple.news/AxguBGfRGRHulSO_fj5D-yA",},
{"page":98, "title":"SAFARI OUTFITTERS AND TOUR OPERATORS",  "url":"https://apple.news/AACezMlLZQYqDkIZHxOY-Dg",},
{"page":100, "title":"WORLD‚ÄôS BEST HOTELS 2019 OPENER",  "url":"https://apple.news/AFZNfm0-HTyWlwx6T9tv6_A",},
{"page":106, "title":"U.S. HOTELS",  "url":"https://apple.news/Al8x9D_dsSqCQUsvup7m6YA",},
{"page":112, "title":"CANADA HOTELS",  "url":"https://apple.news/AoRPlf459T86sBIzW8DNLHA",},
{"page":114, "title":"CARIBBEAN, BERMUDA, AND THE BAHAMAS HOTELS",  "url":"https://apple.news/Avg_FZqmqQpWhQSJ5aA7FjQ",},
{"page":116, "title":"MEXICO AND CENTRAL AND SOUTH AMERICA HOTELS",  "url":"https://apple.news/AwNucn84MTKCYSFQSFTufaQ",},
{"page":120, "title":"EUROPE HOTELS",  "url":"https://apple.news/AScD8tW5CRCCgtE5QlYf4Eg",},
{"page":128, "title":"ASIA HOTELS",  "url":"https://apple.news/ASAWMcOobR9iioTpdkfQBUQ",},
{"page":134, "title":"AFRICA AND THE MIDDLE EAST HOTELS",  "url":"https://apple.news/A0oHMgxdkSwiAawj1tuj0hg",},
{"page":138, "title":"AUSTRALIA, NEW ZEALAND AND THE SOUTH PACIFIC HOTELS",  "url":"https://apple.news/ApRve2wsQQUyk1chDCbdN4Q",},
{"page":140, "title":"THE METHODOLOGY",  "url":"https://apple.news/ArmNOB5_URZ6_uwNi9J_wgQ",},
{"page":143, "title":"SOARING INTO ANOTHER ERA",  "url":"https://apple.news/AE2_DyvlaSiunLT0FTM_vHg",},
{"page":145, "title":"CO-WORKING IS EVOLVING",  "url":"https://apple.news/AlYWWp7e6QIGepp-EJfjL5w",},
{"page":148, "title":"BEST IN BUSINESS (CLASS)",  "url":"https://apple.news/AbKGxxABvTYylYhwv33cyGw",},
{"page":149, "title":"BLEISURE - THE RIGHT WAY",  "url":"https://apple.news/Apw9KQxCETki0xgs11pZqKQ",},
{"page":151, "title":"AUGUST 2019: INTRO",  "url":"https://apple.news/AdbU3zL6TQdOxR2wliKBOaQ",},
{"page":152, "title":"ROAD TO GALICIA",  "url":"https://apple.news/A3oDrrl0dT7aybrjuS-giUg",},
{"page":162, "title":"ALL EYES ON D.C.",  "url":"https://apple.news/Ab0biiWvuTs-3z6LhNIkm0Q",},
{"page":168, "title":"THE LAND OF MYTHICAL CREATURES",  "url":"https://apple.news/ADFq4SV74Q3CwBrbnx6VzRA",},
{"page":176, "title":"SPIRIT IN THE SKY",  "url":"https://apple.news/ASzgwUczuSBKT-VdE2a0i-w",},
{"page":184, "title":"YOUR BEST SHOT: READER PHOTO",  "url":"https://apple.news/Aup0MWzRmT96ABRrDp_PpMA",},
]

const categories = {
    'Alignment Issues': [
        'Change Alignment of Text in number bullet'
        , 'Change Alignment of Text in Photo credit'
        , 'Create a Line break'
        , 'Increase space between sections'
        , 'Make text/section center aligned'
        , 'Make text/section Left aligned'
        , 'Move text to respective section'
        , 'Reduce space between sections'
        , 'Remove Italic Text style'
    ],
    'Divider Issues':[
        'Add Divider'
    ],
    'Hyperlink Issues': [
        'Create Hyperlink',
        'Make Hyperlink Clickable',
        'Make Hyperlink Clickable inside Lightbox',
        'Remove Hyperlink',
        'Third party site Issue',
    ],
    'Image Related Issues':[
        'Make Image Full Bleed',
        'Make Image Non-clickable',
        'Move Image to new location',
        'Reduce Image Size',
        'Resize Image'
    ],
    'LightBox Issues':[
        'Add text to section'
    ],
    'SideBar Issues':[
        'Side treatment'
    ],
    'Text Related Issues':[
        'Add Divider to Pull quote',
        'Add Italic Text style',
        'Add Lede-In style',
       ' Add text to section',
        'Change Alignment of Text in number bullet',
        'Change Header size',
        'Decrease Text Font Size',
        'Delete Image',
        'Delete text from section/Body',
        'Dropcap treatment',
        'Edit Font Style',
        'Increase space between sections',
        'Make text as strapline',
        'Make text Bold style',
        'Make text Regular style',
        'Make text to Lower case',
        'Make text to Sentence case',
        'Make text to Title case',
        'Make text to Upper case',
        'Move Image to new location',
        'Move text to new location',
        'Remove Italic Text style',
        'Resolve Text Font Size'
    ]
}
const workflowState = [
    'open',
    'dev',
    'qa',
    'done',
]
module.exports = {
    workflowState,
    articles,
    brand,
    devNames,
    qaNames,
    categories
}