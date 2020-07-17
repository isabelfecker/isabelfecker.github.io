var APP_DATA = {
  "scenes": [
    {
      "id": "0-auenansicht",
      "name": "Außenansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18425019991264158,
          "pitch": 0.5076899065695031,
          "rotation": 6.283185307179586,
          "target": "1-eingangsbereich"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9528126681206182,
          "pitch": -0.4211624064863422,
          "title": "The New Learning",
          "text": "<img src= images/titel.png>"
        }
      ]
    },
    {
      "id": "1-eingangsbereich",
      "name": "Eingangsbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9095747881082845,
          "pitch": -0.12690464621858055,
          "rotation": 0.7853981633974483,
          "target": "0-auenansicht"
        },
        {
          "yaw": -0.0751831730107888,
          "pitch": 0.20198172196669084,
          "rotation": 18.06415775814132,
          "target": "2-eg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5540821090072185,
          "pitch": -0.8155077473814902,
          "title": "Wandlungsfähige Fassade<div><br></div>",
          "text": "<img src= images/fassade.png>"
        }
      ]
    },
    {
      "id": "2-eg",
      "name": "EG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.437625301937982,
          "pitch": 0.21456085419846005,
          "rotation": 13.351768777756625,
          "target": "1-eingangsbereich"
        },
        {
          "yaw": 0.9341522862486702,
          "pitch": 0.12708223624923676,
          "rotation": 18.06415775814132,
          "target": "3-1-og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47900390854198704,
          "pitch": -0.2289650696461205,
          "title": "''button''",
          "text": "<img src= images/button_01.png>"
        },
        {
          "yaw": 0.6324303739207142,
          "pitch": -0.3649060996174036,
          "title": "Konstruktion",
          "text": "<img src= images/konstruktion.png>"
        }
      ]
    },
    {
      "id": "3-1-og",
      "name": "1. OG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.305159900676821,
          "pitch": 0.642389067173692,
          "rotation": 6.283185307179586,
          "target": "2-eg"
        },
        {
          "yaw": -2.4017020854653293,
          "pitch": -0.2154119739971616,
          "rotation": 17.27875959474387,
          "target": "5-3-og"
        },
        {
          "yaw": 2.080059843319754,
          "pitch": -0.09690453067401705,
          "rotation": 7.0685834705770345,
          "target": "4-2-og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6475936806237659,
          "pitch": -0.1501970926776739,
          "title": "Mountain Top",
          "text": "<img src= images/mountain_top.png>"
        },
        {
          "yaw": -1.873815981314788,
          "pitch": -0.21496682181830806,
          "title": "Watering Hole",
          "text": "<img src= images/watering_hole.png>"
        }
      ]
    },
    {
      "id": "4-2-og",
      "name": "2. OG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.74309768903397,
          "pitch": 0.2099433899526879,
          "rotation": 5.497787143782138,
          "target": "3-1-og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2456614482668087,
          "pitch": 0.38572191799956457,
          "title": "Cave",
          "text": "<img src= images/cave.png>"
        },
        {
          "yaw": 1.6171829169878356,
          "pitch": -0.04969571655495386,
          "title": "Campfire",
          "text": "<img src= images/campfire.png>"
        }
      ]
    },
    {
      "id": "5-3-og",
      "name": "3. OG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6666727328150053,
          "pitch": 0.481259701834718,
          "rotation": 6.283185307179586,
          "target": "4-2-og"
        },
        {
          "yaw": 1.2652350649931705,
          "pitch": 0.08062818927242787,
          "rotation": 3.141592653589793,
          "target": "2-eg"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The New Learning",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
