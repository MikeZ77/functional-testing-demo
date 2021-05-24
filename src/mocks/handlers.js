import { rest } from 'msw'

export const handlers = 
  [
    rest.get('https://random-data-api.com/api/coffee/random_coffee', (req, res, ctx) => {
      return res(
        ctx.json(
        [
          {
          "id": 9711,
          "uid": "17c5e3b8-f3dc-4963-97d0-403d1ae1a02b",
          "blend_name": "Pumpkin-spice Treat",
          "origin": "Machakos, Kenya",
          "variety": "Ennarea",
          "notes": "sharp, juicy, grassy, quakery, bakers chocolate",
          "intensifier": "clean"
          },
          {
          "id": 4982,
          "uid": "252534cb-c037-475d-bbfa-b286cd4d76a4",
          "blend_name": "Express Extract",
          "origin": "Kigeyo Washing Station, Rwanda",
          "variety": "Liberica",
          "notes": "pointed, coating, white pepper, tomato, coconut",
          "intensifier": "muted"
          },
          {
          "id": 8216,
          "uid": "13c59a1d-d7c4-47bd-8595-cff04654e3e0",
          "blend_name": "Pumpkin-spice Light",
          "origin": "San'ani, Yemen",
          "variety": "Bourbon",
          "notes": "dull, silky, grapefruit, red currant, olive",
          "intensifier": "dirty"
          },
          {
          "id": 6874,
          "uid": "06cbe1ef-35e5-4d8f-b3c6-2865b9abe8f9",
          "blend_name": "Joe Bean",
          "origin": "Turrialba, Costa Rica",
          "variety": "Gesha",
          "notes": "dirty, tea-like, blueberry, rose hips, black-tea",
          "intensifier": "dirty"
          },
          {
          "id": 6819,
          "uid": "82496189-ac17-43c6-b2ed-79d15d5108c3",
          "blend_name": "Blacktop Star",
          "origin": "Northern Region, Arusha, Tanzania",
          "variety": "Sumatara",
          "notes": "bright, full, corriander, red grape, cocoa powder",
          "intensifier": "pointed"
          }
        ]
      ))
    })
  ]
