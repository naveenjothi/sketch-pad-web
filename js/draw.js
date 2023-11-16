const draw = {};

draw.path = (context, path, color = "black") => {
  context.strokeStyle = color;
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(...path[0]);
  for (let index = 1; index < path.length; index++) {
    context.lineTo(...path[index]);
  }
  context.lineCap = "round";
  context.lineJoin = "round";
  context.stroke();
};

draw.paths = (context, paths, color = "black") => {
  for (const path of paths) {
    draw.path(context, path, color);
  }
};
