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
            (segment (start ${ adjust_point(1.87, -8.32) }) (end ${ adjust_point(1.0125, -7.4625) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(2, 1.075) }) (end ${ adjust_point(1.2, 1.875) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(3.779347, -8.32) }) (end ${ adjust_point(1.87, -8.32) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(4.845, 3.023735) }) (end ${ adjust_point(4.845, -7.254347) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(4.845, -7.254347) }) (end ${ adjust_point(3.779347, -8.32) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(1.2, 1.875) }) (end ${ adjust_point(2.369694, 3.044694) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(1.0125, -7.4625) }) (end ${ adjust_point(1.0125, -9.126847) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(1.0125, -9.126847) }) (end ${ adjust_point(1.004041, -9.135306) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(4.824041, 3.044694) }) (end ${ adjust_point(4.845, 3.023735) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(2, 0) }) (end ${ adjust_point(2, 1.075) }) (width 0.25) (layer "F.Cu") (net 1))
            (segment (start ${ adjust_point(2.369694, 3.044694) }) (end ${ adjust_point(4.824041, 3.044694) }) (width 0.25) (layer "F.Cu") (net 1))
            (via (at ${ adjust_point(4.824041, 3.044694) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (via (at ${ adjust_point(1.004041, -9.135306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 1))
            (segment (start ${ adjust_point(4.793735, 3.075) }) (end ${ adjust_point(-0.655959, 3.075) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-2, 0) }) (end ${ adjust_point(-2, 1.075) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-1.2, 2.530959) }) (end ${ adjust_point(-0.655959, 3.075) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(1.004041, -9.135306) }) (end ${ adjust_point(0.660306, -9.135306) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-1.2, 1.875) }) (end ${ adjust_point(-1.2, 2.530959) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-2, 1.075) }) (end ${ adjust_point(-1.2, 1.875) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(0.660306, -9.135306) }) (end ${ adjust_point(-1.0125, -7.4625) }) (width 0.25) (layer "B.Cu") (net 1))
            (segment (start ${ adjust_point(-2.4, 1.875) }) (end ${ adjust_point(-3.250401, 1.875) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-4.225, -6.275) }) (end ${ adjust_point(-4.225, -0.225) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-4, 1.125402) }) (end ${ adjust_point(-3.250401, 1.875) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(2.2, -6.625) }) (end ${ adjust_point(3.0375, -7.4625) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-3.0375, -7.4625) }) (end ${ adjust_point(-4.225, -6.275) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-4, 0) }) (end ${ adjust_point(-4, 1.125402) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-0.175, -6.625) }) (end ${ adjust_point(2.2, -6.625) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-1.0125, -7.4625) }) (end ${ adjust_point(-0.175, -6.625) }) (width 0.25) (layer "F.Cu") (net 2))
            (segment (start ${ adjust_point(-3.0375, -7.4625) }) (end ${ adjust_point(-1.0125, -7.4625) }) (width 0.25) (layer "F.Cu") (net 2))
            (via (at ${ adjust_point(3.0375, -7.4625) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 2))
            (segment (start ${ adjust_point(-2.05, -6.475) }) (end ${ adjust_point(0.025, -6.475) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4, 0) }) (end ${ adjust_point(4.245, -0.245) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(0.025, -6.475) }) (end ${ adjust_point(1.0125, -7.4625) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.245, -6.255) }) (end ${ adjust_point(3.0375, -7.4625) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(1.0125, -7.4625) }) (end ${ adjust_point(3.0375, -7.4625) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.245, -0.245) }) (end ${ adjust_point(4.245, -6.255) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(-2.05, -6.475) }) (end ${ adjust_point(-3.0375, -7.4625) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4.225, 0.05) }) (end ${ adjust_point(2.4, 1.875) }) (width 0.25) (layer "B.Cu") (net 2))
            (segment (start ${ adjust_point(4, 0) }) (end ${ adjust_point(2.875, -1.125) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(1.2755, -3.945306) }) (end ${ adjust_point(1.345306, -3.945306) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(2.875, -1.125) }) (end ${ adjust_point(2.875, -2.745306) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(1.345306, -3.945306) }) (end ${ adjust_point(3.0375, -5.6375) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(2.4, 1.875) }) (end ${ adjust_point(4, 0.275) }) (width 0.25) (layer "F.Cu") (net 3))
            (segment (start ${ adjust_point(2.875, -2.745306) }) (end ${ adjust_point(2.875, -5.475) }) (width 0.25) (layer "F.Cu") (net 3))
            (via (at ${ adjust_point(1.2755, -3.945306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
            (via (at ${ adjust_point(2.875, -2.745306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 3))
            (segment (start ${ adjust_point(-2.4, 1.6) }) (end ${ adjust_point(-4, 0) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(-1.290306, -3.890306) }) (end ${ adjust_point(-3.0375, -5.6375) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(1.2205, -3.890306) }) (end ${ adjust_point(-1.290306, -3.890306) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(-1.254694, -2.745306) }) (end ${ adjust_point(2.875, -2.745306) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(1.2755, -3.945306) }) (end ${ adjust_point(1.2205, -3.890306) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(-4, 0) }) (end ${ adjust_point(-1.254694, -2.745306) }) (width 0.25) (layer "B.Cu") (net 3))
            (segment (start ${ adjust_point(-2, 1.075) }) (end ${ adjust_point(-1.2, 1.875) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-2, -1.575) }) (end ${ adjust_point(-2, -3.245306) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-2, 0) }) (end ${ adjust_point(-2, 1.075) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-2, -3.245306) }) (end ${ adjust_point(-2, -4.6) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-2, 0) }) (end ${ adjust_point(-2, -1.575) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-1.01, -1.575) }) (end ${ adjust_point(-2, -1.575) }) (width 0.25) (layer "F.Cu") (net 4))
            (segment (start ${ adjust_point(-2, -4.6) }) (end ${ adjust_point(-3.0375, -5.6375) }) (width 0.25) (layer "F.Cu") (net 4))
            (via (at ${ adjust_point(-2, -3.245306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 4))
            (via (at ${ adjust_point(-1.01, -1.575) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 4))
            (segment (start ${ adjust_point(2, 1.075) }) (end ${ adjust_point(1.2, 1.875) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(-1.96, -3.205306) }) (end ${ adjust_point(1.560805, -3.205306) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(-2, -3.245306) }) (end ${ adjust_point(-1.96, -3.205306) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(3.0375, -4.682001) }) (end ${ adjust_point(3.0375, -5.6375) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(2, 0) }) (end ${ adjust_point(2, 1.075) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(0.425, -1.575) }) (end ${ adjust_point(-1.01, -1.575) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(2, 0) }) (end ${ adjust_point(0.425, -1.575) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(1.560805, -3.205306) }) (end ${ adjust_point(3.0375, -4.682001) }) (width 0.25) (layer "B.Cu") (net 4))
            (segment (start ${ adjust_point(0, 0) }) (end ${ adjust_point(0, 1.875) }) (width 0.25) (layer "F.Cu") (net 5))
            (segment (start ${ adjust_point(0, 0) }) (end ${ adjust_point(0, -4.611265) }) (width 0.25) (layer "F.Cu") (net 5))
            (segment (start ${ adjust_point(0, -4.625) }) (end ${ adjust_point(1.0125, -5.6375) }) (width 0.25) (layer "F.Cu") (net 5))
            (segment (start ${ adjust_point(0, -4.625) }) (end ${ adjust_point(-1.0125, -5.6375) }) (width 0.25) (layer "F.Cu") (net 5))
            (via (at ${ adjust_point(0, 0) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 5))
            (via (at ${ adjust_point(0.004041, -4.615306) }) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 5))
            (segment (start ${ adjust_point(0, 0) }) (end ${ adjust_point(0, 1.875) }) (width 0.25) (layer "B.Cu") (net 5))
            (segment (start ${ adjust_point(-1.0125, -5.631847) }) (end ${ adjust_point(0.004041, -4.615306) }) (width 0.25) (layer "B.Cu") (net 5))
            (segment (start ${ adjust_point(1.0125, -5.623765) }) (end ${ adjust_point(0.004041, -4.615306) }) (width 0.25) (layer "B.Cu") (net 5))

        `

        return traces
    }
  }