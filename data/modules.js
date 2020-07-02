export const modules = [
    {
      id: 100,
      name: 'Analysis',
      children: [
        { id: 101, name: 'Analysis Simple Beam', text: "Simple Beam", chip: null, to: '../analysis/simplebeam' },
        { id: 102, name: 'Analysis Cantilever Beam', text: "Cantilever Beam", chip: null, to: '../analysis/cantileverbeam' },
        { id: 103, name: 'Analysis Fixed Beam', text: "Fixed Beam", chip: null, to: '../analysis/fixedbeam' },
        { id: 104, name: 'Analysis Overhang Beam', text: "Overhang Beam", chip: null, to: '../analysis/overhangbeam' },
      ],
    },

    {
      id: 200,
      name: 'Concrete',
      children: [
        { id: 201, name: 'Concrete Beam', text: "Beam", chip: null, to: '../concrete/beam' },
        { id: 202, name: 'Concrete Column', text: "Column", chip: "new", to: '../concrete/column' },
        { id: 203, name: 'Concrete Shearwall', text: "Shearwall", chip: null, to: '../concrete/shearwall' },
        { id: 204, name: 'Concrete Slab', text: "Slab", chip: null, to: '../concrete/slab' },
        { id: 205, name: 'Concrete tilt-up', text: "Tilt-up", chip: null, to: '../concrete/tiltup' },
      ],
    },

    {
      id: 300,
      name: 'Coldform',
      children: [
        { id: 301, name: 'Coldform Header', text: "Header", chip: null, to: '../coldform/header' },
        { id: 302, name: 'Coldform Joist', text: "Joist", chip: null, to: '../coldform/joist' },
        { id: 303, name: 'Coldform Post', text: "Post", chip: null, to: '../coldform/post' },
        { id: 304, name: 'Coldform Bearing Wall', text: "Bearing Wall", chip: null, to: '../coldform/bearingwall' },
        { id: 305, name: 'Coldform Shear Wall', text: "Shear Wall", chip: null, to: '../coldform/shearwall' },
      ],
    },

    {
      id: 400,
      name: 'Foundation',
      children: [
        { id: 401, name: 'Foundation Strip Footing', text: "Strip Footing", chip: null, to: '../foundation/strip' },
        { id: 402, name: 'Foundation Spread Footing', text: "Spread Footing", chip: null, to: '../foundation/spread' },
        { id: 403, name: 'Foundation Combined Footing', text: "Combined Footing", chip: null, to: '../foundation/combined' },
        { id: 404, name: 'Foundation Retaining Wall', text: "Retaining Wall", chip: null, to: '../foundation/retaining' },
        { id: 405, name: 'Foundation Pile Cap', text: "Pile Cap", chip: null, to: '../foundation/pilecap' },
        { id: 406, name: 'Foundation Grade Beam', text: "Grade Beam", chip: null, to: '../foundation/gradebeam' },
      ],
    },

    {
      id: 500,
      name: 'General',
      children: [
        { id: 501, name: 'General Loads', text: "Loads", chip: null, to: '../general/loads' },
        { id: 502, name: 'General Quadratic', text: "Quadratic", chip: null, to: '../general/quadratic' },
        { id: 503, name: 'General Dimensions', text: "Dimensions", chip: null, to: '../general/dimensions' },
        { id: 504, name: 'General Slope', text: "Slope Conversion", chip: null, to: '../general/slope' },
      ],
    },

    {
      id: 600,
      name: 'Masonry',
      children: [
        { id: 601, name: 'Masonry Bearing wall', text: "Bearing wall", chip: null, to: '../masonry/bearingwall' },
        { id: 602, name: 'Masonry Capacity', text: "Capacity", chip: null, to: '../masonry/capacity' },
        { id: 603, name: 'Masonry Lintel', text: "Lintel", chip: null, to: '../masonry/lintel' },
        { id: 604, name: 'Masonry Pier', text: "Pier", chip: null, to: '../masonry/pier' },
        { id: 605, name: 'Masonry Shearwall', text: "Shearwall", chip: null, to: '../masonry/shearwall' },
      ],
    },

    {
      id: 700,
      name: 'Seismic',
      children: [
        { id: 701, name: 'Seismic Main', text: "Main", chip: null, to: '../seismic/main' },
        { id: 702, name: 'Seismic Component', text: "Component", chip: null, to: '../seismic/component' },
      
      ],
    },

    {
      id: 800,
      name: 'Snow',
      children: [
        { id: 801, name: 'Snow Drift', text: "Drift", chip: null, to: '../snow/drift' },
      
      ],
    },

    {
      id: 900,
      name: 'Steel',
      children: [
        { id: 901, name: 'Steel Baseplate', text: "Baseplate", chip: null, to: '../steel/baseplate' },
        { id: 902, name: 'Steel Beam', text: "Beam", chip: null, to: '../steel/beam' },
        { id: 903, name: 'Steel Capacity', text: "Capacity", chip: null, to: '../steel/capacity' },
        { id: 904, name: 'Steel Column', text: "Column", chip: null, to: '../steel/column'},
        { id: 905, name: 'Steel Girder', text: "Girder", chip: "updated", to: '../steel/girder' },
        { id: 906, name: 'Steel Lintel', text: "Lintel", chip: null, to: '../steel/lintel' },
      ],
    },

    {
      id: 1000,
      name: 'Wind',
      children: [
        { id: 1001, name: 'Wind Main', text: "Main", chip: null, to: '../wind/main' },
        { id: 1002, name: 'Wind Component', text: "Component", chip: null, to: '../wind/component' },
      ],
    },

    {
      id: 1100,
      name: 'Wood',
      children: [
        { id: 1101, name: 'Wood Glulam Capacity', text: "Glulam Capacity", chip: null, to: '../wood/capacityGlulam' },
        { id: 1102, name: 'Wood Sawn Capacity', text: "Sawn Capacity", chip: null, to: '../wood/capacitySawnlumber' },
        { id: 1103, name: 'Wood Lag Bolt', text: "Lag Bolt", chip: null, to: '../wood/fastenerBolt' },
        { id: 1104, name: 'Wood Common Nail', text: "Common Nail", chip: null, to: '../wood/fastenerNail' },
        { id: 1105, name: 'Wood Screw', text: "Wood Screw", chip: null, to: '../wood/fastenerWoodScrew' },
        { id: 1106, name: 'Wood Glulam Girder', text: "Glulam Girder", chip: null, to: '../wood/girderGlulam' },
        { id: 1107, name: 'Wood Sawn Header', text: "Sawn Header", chip: null, to: '../wood/headerSawnlumber' },
        { id: 1108, name: 'Wood Sawn Joist', text: "Sawn Joist", chip: null, to: '../wood/joistSawnlumber' },
        { id: 1109, name: 'Wood Sawn Post', text: "Sawn Post", chip: null, to: '../wood/postSawnlumber' },
      ],
    },
  ]