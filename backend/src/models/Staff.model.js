const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    roleType: {
      type: String,
      enum: ["coach", "admin"],
      required: true,
    },

    salary: {
      type: Number,
      default: 0,
    },

    assignedBatches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch",
      },
    ],

    attendanceRecords: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attendance",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema);
