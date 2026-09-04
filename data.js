var APP_DATA = {
  "scenes": [
    {
      "id": "0-trilha-inicial",
      "name": "Trilha inicial",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.3624103142487467,
        "pitch": -0.2762371178973524,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.35366529541745173,
          "pitch": 0.24643291571481996,
          "rotation": 0,
          "target": "1-vista-piramide"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vista-piramide",
      "name": "Vista Piramide",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -2.0090058809755824,
        "pitch": -0.2656408664779999,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.21686558645473042,
          "pitch": 0.427983577046664,
          "rotation": 0,
          "target": "2-entrada-do-chal"
        },
        {
          "yaw": 0.97336833773835,
          "pitch": 0.5478379265718196,
          "rotation": 0,
          "target": "0-trilha-inicial",
          "targetViewParameters": {
            "yaw": 2.0494816095741966
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada-do-chal",
      "name": "Entrada do Chalé",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw":  0.5,
        "pitch": 0.028199849463902638,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.04139428513813037,
          "pitch": 0.6504896408340848,
          "rotation": 0,
          "target": "3-espao-gourmet"
        },
        {
          "yaw": 1.0690868561577922,
          "pitch": 0.6027668064332676,
          "rotation": 6.283185307179586,
          "target": "5-interior-do-chal"
        },
        {
          "yaw": 2.1818436253618616,
          "pitch": 0.4331015868961412,
          "rotation": 0,
          "target": "1-vista-piramide",
          "targetViewParameters": {
            "yaw": -2.7839597819644926
          }
        },
        {
          "yaw": -1.035332922463338,
          "pitch": 0.5385690491002553,
          "rotation": 0,
          "target": "4-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-espao-gourmet",
      "name": "Espaço Gourmet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -1.5591567562813182,
        "pitch": -0.02525698633570883,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.4729188314387361,
          "pitch": 0.7767880884010772,
          "rotation": 0,
          "target": "2-entrada-do-chal",
          "targetViewParameters": {
            "yaw": -3.1280038955929967
          } 
        },

        {
          "yaw": .25,
          "pitch": 0.60531443733276603,
          "rotation": 0,
          "target": "5-interior-do-chal",
           "targetViewParameters": {
            "yaw": -0.233215024539078
          }
        },

        {
          "yaw": -1.0412481394711186,
          "pitch": 0.49531443733276603,
          "rotation": 0,
          "target": "6-lateral-do-chal"
        },
        {
          "yaw": 2.079773148230636,
          "pitch": 0.4521000219230338,
          "rotation": 0,
          "target": "4-bathroom",
          "targetViewParameters": {
            "yaw": 3.133215024539078
          }
        }
        
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -2.1408175446404023,
        "pitch": 0.02586051948588164,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.48713063705404736,
          "pitch": 0.6326706293888016,
          "rotation": 7.853981633974483,
          "target": "2-entrada-do-chal",
          "targetViewParameters": {
            "yaw": 2.8329358214312634
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-interior-do-chal",
      "name": "Interior do Chalé",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.7722943267644382,
        "pitch": 0.18456134130309287,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.8062622400640826,
          "pitch": 0.6621218106454965,
          "rotation": 0,
          "target": "2-entrada-do-chal",
          "targetViewParameters": {
            "yaw": -2.477612943351252
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lateral-do-chal",
      "name": "Lateral do Chalé",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -1.6630121326220983,
        "pitch": 0.09305956301692042,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.2073396161272436,
          "pitch": 0.5774939439885092,
          "rotation": 0,
          "target": "3-espao-gourmet",
          "targetViewParameters": {
            "yaw": 2.275369978425122
          }
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Piramide Vidro",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
