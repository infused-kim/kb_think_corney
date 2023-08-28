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

        const traces = `
            (segment (start ${ adjust_point(-0.949808, 0) }) (end ${ adjust_point(0.025498, -0.975306) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(-1.25, 1.225) }) (end ${ adjust_point(-0.6, 1.875) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(-1.25, 0) }) (end ${ adjust_point(-0.949808, 0) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(-1.25, 0) }) (end ${ adjust_point(-1.25, 1.225) }) (width 0.25) (layer "F.Cu") (net 1))
            (via (at ${ adjust_point(0.025498, -0.975306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (segment (start ${ adjust_point(1.25, 1.225) }) (end ${ adjust_point(0.6, 1.875) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(1.25, 0) }) (end ${ adjust_point(1.25, 1.225) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.025498, -0.975306) }) (end ${ adjust_point(0.274694, -0.975306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.274694, -0.975306) }) (end ${ adjust_point(1.25, 0) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(1.25, 1.225) }) (end ${ adjust_point(0.6, 1.875) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(0.261664, 0.988336) }) (end ${ adjust_point(1.25, 0) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(1.25, 0) }) (end ${ adjust_point(1.25, 1.225) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(0.01685, 0.988336) }) (end ${ adjust_point(0.261664, 0.988336) }) (width 0.25) (layer "F.Cu") (net 2))
            (via (at ${ adjust_point(0.01685, 0.988336) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (segment (start ${ adjust_point(-0.971486, 0) }) (end ${ adjust_point(0.01685, 0.988336) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-1.25, 0) }) (end ${ adjust_point(-1.25, 1.225) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-1.25, 0) }) (end ${ adjust_point(-0.971486, 0) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-1.25, 1.225) }) (end ${ adjust_point(-0.6, 1.875) }) (width 0.25) (layer "B.Cu") (net 2))
        `

        return traces
    }
  }
