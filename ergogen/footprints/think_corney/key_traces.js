module.exports = {
    params: {
      designator: 'T',
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

        (segment (start ${ adjust_point(5.015959, 7.015306) }) (end ${ adjust_point(5.015959, 3.795306) }) (width 0.25) (layer "F.Cu") (net 1))
        (segment (start ${ adjust_point(2.87, -5.545) }) (end ${ adjust_point(3.275, -5.95) }) (width 0.25) (layer "F.Cu") (net 1))
        (segment (start ${ adjust_point(5.015959, -7.674694) }) (end ${ adjust_point(5.015959, -8.134694) }) (width 0.25) (layer "F.Cu") (net 1))
        (segment (start ${ adjust_point(5.015959, -8.134694) }) (end ${ adjust_point(5.015959, -8.144694) }) (width 0.25) (layer "F.Cu") (net 1))
        (segment (start ${ adjust_point(2.87, 1.67) }) (end ${ adjust_point(5, 3.8) }) (width 0.25) (layer "F.Cu") (net 1))
        (segment (start ${ adjust_point(3.295959, -5.954694) }) (end ${ adjust_point(5.015959, -7.674694) }) (width 0.25) (layer "F.Cu") (net 1))
        (segment (start ${ adjust_point(2.87, 1.67) }) (end ${ adjust_point(2.87, -5.545) }) (width 0.25) (layer "F.Cu") (net 1))
        (via (at ${ adjust_point(5.015959, 7.015306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
        (via (at ${ adjust_point(3.275, -5.95) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
        (segment (start ${ adjust_point(1.275, -3.95) }) (end ${ adjust_point(3.275, -5.95) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(3.82, 2.62) }) (end ${ adjust_point(-3.82, 2.62) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(-1.275, -3.95) }) (end ${ adjust_point(1.275, -3.95) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(-3.82, 2.62) }) (end ${ adjust_point(-5, 3.8) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(4.071265, 7.96) }) (end ${ adjust_point(0, 7.96) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(5, 3.8) }) (end ${ adjust_point(3.82, 2.62) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(5.015959, 7.015306) }) (end ${ adjust_point(4.071265, 7.96) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(-3.275, -5.95) }) (end ${ adjust_point(-1.275, -3.95) }) (width 0.25) (layer "B.Cu") (net 1))
        (segment (start ${ adjust_point(1.665959, 3.795306) }) (end ${ adjust_point(1.665959, 7.015306) }) (width 0.25) (layer "F.Cu") (net 2))
        (via (at ${ adjust_point(1.665959, 7.015306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
        (via (at ${ adjust_point(1.665959, 3.805306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
        (segment (start ${ adjust_point(1.645959, 3.795306) }) (end ${ adjust_point(1.655959, 3.795306) }) (width 0.25) (layer "B.Cu") (net 2))
        (segment (start ${ adjust_point(1.665959, 7.015306) }) (end ${ adjust_point(1.171265, 7.51) }) (width 0.25) (layer "B.Cu") (net 2))
        (segment (start ${ adjust_point(1.171265, 7.51) }) (end ${ adjust_point(0, 7.51) }) (width 0.25) (layer "B.Cu") (net 2))
        (segment (start ${ adjust_point(1.655959, 3.795306) }) (end ${ adjust_point(1.665959, 3.805306) }) (width 0.25) (layer "B.Cu") (net 2))
        (segment (start ${ adjust_point(-3.094041, 2.335306) }) (end ${ adjust_point(-1.634041, 3.795306) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(-1.654041, 3.795306) }) (end ${ adjust_point(-1.634041, 3.795306) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(-6.384041, -1.874694) }) (end ${ adjust_point(-3.754041, -1.874694) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(-3.754041, -1.874694) }) (end ${ adjust_point(-3.094041, -1.214694) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(-1.634041, 4.245306) }) (end ${ adjust_point(-1.634041, 3.795306) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(0.015959, 5.895306) }) (end ${ adjust_point(-1.634041, 4.245306) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(-8.254041, -3.754694) }) (end ${ adjust_point(-6.384041, -1.874694) }) (width 0.25) (layer "F.Cu") (net 3))
        (segment (start ${ adjust_point(-3.094041, -1.214694) }) (end ${ adjust_point(-3.094041, 2.335306) }) (width 0.25) (layer "F.Cu") (net 3))
        (via (at ${ adjust_point(-1.634041, 3.795306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
        (via (at ${ adjust_point(-8.275, -3.75) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
        (segment (start ${ adjust_point(4.6, -7.97) }) (end ${ adjust_point(-4.6, -7.97) }) (width 0.25) (layer "B.Cu") (net 3))
        (segment (start ${ adjust_point(-1.654041, 4.245306) }) (end ${ adjust_point(-0.004041, 5.895306) }) (width 0.25) (layer "B.Cu") (net 3))
        (segment (start ${ adjust_point(8.275, -4.295) }) (end ${ adjust_point(8.275, -3.75) }) (width 0.25) (layer "B.Cu") (net 3))
        (segment (start ${ adjust_point(4.6, -7.97) }) (end ${ adjust_point(8.275, -4.295) }) (width 0.25) (layer "B.Cu") (net 3))
        (segment (start ${ adjust_point(-8.275, -4.295) }) (end ${ adjust_point(-8.275, -3.75) }) (width 0.25) (layer "B.Cu") (net 3))
        (segment (start ${ adjust_point(-1.654041, 3.795306) }) (end ${ adjust_point(-1.654041, 4.245306) }) (width 0.25) (layer "B.Cu") (net 3))
        (segment (start ${ adjust_point(-4.6, -7.97) }) (end ${ adjust_point(-8.275, -4.295) }) (width 0.25) (layer "B.Cu") (net 3))
        `

        return traces;
    }
  }
