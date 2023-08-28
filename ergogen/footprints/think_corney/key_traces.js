module.exports = {
    params: {
      designator: 'T',
      variation: 0,
    },
    body: p => {
        const get_at_coordinates = () => {
            const pattern = /\(at (-?[\d\.]*) (-?[\d\.]*) (-?[\d\.]*)\)/;
            const matches = p.at.match(pattern);
            if (matches && matches.length == 4) {
                return [parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])];
            } else {
                return null;
            }
        }

        const adjust_point = (x, y) => {
            const at_l = get_at_coordinates();
            if(at_l == null) {
                throw new Error(
                `Could not get x and y coordinates from p.at: ${p.at}`
                );
            }
            const at_x = at_l[0];
            const at_y = at_l[1];
            const at_angle = at_l[2];
            const adj_x = at_x + x;
            const adj_y = at_y + y;

            const radians = (Math.PI / 180) * at_angle,
                cos = Math.cos(radians),
                sin = Math.sin(radians),
                nx = (cos * (adj_x - at_x)) + (sin * (adj_y - at_y)) + at_x,
                ny = (cos * (adj_y - at_y)) - (sin * (adj_x - at_x)) + at_y;

            const point_str = `${nx.toFixed(2)} ${ny.toFixed(2)}`;
            return point_str;
        }

        const traces_solder = `
            (segment (start ${ adjust_point(5, 3.8) }) (end ${ adjust_point(3.82, 2.62) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(3.82, 2.62) }) (end ${ adjust_point(-3.82, 2.62) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-3.82, 2.62) }) (end ${ adjust_point(-5, 3.8) }) (width 0.25) (layer "B.Cu") (net 1))

            (via (at ${ adjust_point(1.65, 3.8) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (via (at ${ adjust_point(-1.65, 3.8) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))

            (segment (start ${ adjust_point(-1.65, 4.25) }) (end ${ adjust_point(0, 5.9) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(-1.65, 3.8) }) (end ${ adjust_point(-1.65, 4.25) }) (width 0.25) (layer "F.Cu") (net 3))
        `

        const traces_all = `
            (segment (start ${ adjust_point(5, 3.8) }) (end ${ adjust_point(3.82, 2.62) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(3.82, 2.62) }) (end ${ adjust_point(-3.82, 2.62) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-3.82, 2.62) }) (end ${ adjust_point(-5, 3.8) }) (width 0.25) (layer "B.Cu") (net 1))

            (via (at ${ adjust_point(1.65, 3.8) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (via (at ${ adjust_point(-1.65, 3.8) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))

            (segment (start ${ adjust_point(-1.65, 4.25) }) (end ${ adjust_point(0, 5.9) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(-1.65, 3.8) }) (end ${ adjust_point(-1.65, 4.25) }) (width 0.25) (layer "F.Cu") (net 3))

            (segment (start ${ adjust_point(2.87, -5.545) }) (end ${ adjust_point(3.275, -5.95) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(2.87, 1.67) }) (end ${ adjust_point(5, 3.8) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(2.87, 1.67) }) (end ${ adjust_point(2.87, -5.545) }) (width 0.25) (layer "F.Cu") (net 1))
            (via (at ${ adjust_point(3.275, -5.95) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (segment (start ${ adjust_point(1.275, -3.95) }) (end ${ adjust_point(3.275, -5.95) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-1.275, -3.95) }) (end ${ adjust_point(1.275, -3.95) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-3.275, -5.95) }) (end ${ adjust_point(-1.275, -3.95) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-5.74, -1.55) }) (end ${ adjust_point(-2.94, -1.55) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(-7.25, -2.75) }) (end ${ adjust_point(-5.74, -1.55) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(-2.94, -1.55) }) (end ${ adjust_point(-2.94, 2.51) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(-2.94, 2.51) }) (end ${ adjust_point(-1.65, 3.8) }) (width 0.25) (layer "F.Cu") (net 3))
            (via (at ${ adjust_point(-2.94, -1.55) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
            (segment (start ${ adjust_point(-2.736, -1.55) }) (end ${ adjust_point(-2, -2.286) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(2, -2.286) }) (end ${ adjust_point(-2, -2.286) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(-2.94, -1.55) }) (end ${ adjust_point(-2.736, -1.55) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(6.049, -1.524) }) (end ${ adjust_point(2.762, -1.524) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(2.762, -1.524) }) (end ${ adjust_point(2, -2.286) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(7.25, -2.75) }) (end ${ adjust_point(6.049, -1.524) }) (width 0.25) (layer "B.Cu") (net 3))

        `

        if(p.variation == 1) {
            return traces_solder
        } else {
            return traces_all
        }
    }
  }
